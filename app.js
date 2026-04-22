// 🛠️ Módulo de Armazenamento e Dados
const storage = {
    getQuestions: () => {
        // 1. Pega as questões extras cadastradas manualmente no navegador (se existirem)
        const questoesLocais = JSON.parse(localStorage.getItem('quiz_questions')) || [];
        
        // 2. Pega as questões fixas do arquivo database.js
        // (Fazemos uma checagem caso você esqueça de criar o arquivo)
        const questoesFixas = typeof bancoDeQuestoes !== 'undefined' ? bancoDeQuestoes : [];
        
        // 3. Junta tudo! As fixas + as que o usuário cadastrou na hora
        return [...questoesFixas, ...questoesLocais];
    },
    
    saveQuestion: (e) => {
        e.preventDefault();
        const newQuestion = {
            id: Date.now(),
            subject: document.getElementById('q-subject').value,
            text: document.getElementById('q-text').value,
            options: {
                A: document.getElementById('q-altA').value,
                B: document.getElementById('q-altB').value,
                C: document.getElementById('q-altC').value,
                D: document.getElementById('q-altD').value,
                E: document.getElementById('q-altE').value,
            },
            correct: document.getElementById('q-correct').value
        };

        // NOTA: Salvamos apenas no localStorage. 
        // As do database.js são fixas e não mudam por aqui.
        const questoesLocais = JSON.parse(localStorage.getItem('quiz_questions')) || [];
        questoesLocais.push(newQuestion);
        localStorage.setItem('quiz_questions', JSON.stringify(questoesLocais));
        
        alert('✅ Questão extra salva com sucesso no navegador!');
        e.target.reset();
    },

    importQuestions: () => {
        const fileInput = document.getElementById('file-import');
        if (!fileInput) return alert('⚠️ Campo de upload não encontrado.'); 
        
        const file = fileInput.files[0];
        if (!file) return alert('⚠️ Por favor, selecione um arquivo .json primeiro!');

        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                if (!Array.isArray(importedData)) throw new Error("O arquivo não contém uma lista válida.");

                const questoesLocais = JSON.parse(localStorage.getItem('quiz_questions')) || [];
                const mergedQuestions = [...questoesLocais, ...importedData];

                localStorage.setItem('quiz_questions', JSON.stringify(mergedQuestions));
                alert(`✅ Sucesso! ${importedData.length} questões extras foram importadas.`);
                fileInput.value = ''; 
                
            } catch (error) {
                alert('❌ Erro ao ler o arquivo. Certifique-se de que é um JSON válido.');
            }
        };
        reader.readAsText(file);
    }
};

    // 📥 NOVA FUNÇÃO: Importar questões via arquivo JSON em lote
    importQuestions: () => {
        const fileInput = document.getElementById('file-import');
        // Prevenção de erro caso o input ainda não exista na tela
        if (!fileInput) return alert('⚠️ Campo de upload não encontrado.'); 
        
        const file = fileInput.files[0];

        if (!file) return alert('⚠️ Por favor, selecione um arquivo .json primeiro!');

        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                
                if (!Array.isArray(importedData)) {
                    throw new Error("O arquivo não contém uma lista válida.");
                }

                // Pega as questões antigas e junta com as novas
                const currentQuestions = storage.getQuestions();
                const mergedQuestions = [...currentQuestions, ...importedData];

                // Salva tudo no navegador
                localStorage.setItem('quiz_questions', JSON.stringify(mergedQuestions));
                
                alert(`✅ Sucesso! ${importedData.length} questões foram importadas.`);
                fileInput.value = ''; // Limpa o campo
                
            } catch (error) {
                alert('❌ Erro ao ler o arquivo. Certifique-se de que é um JSON válido no formato correto.');
                console.error(error);
            }
        };

        reader.readAsText(file);
    }
;

// 🎨 Módulo de Interface
const ui = {
    showScreen: (screenId) => {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        if(screenId !== 'quiz-area') quiz.stopTimer();
    },
    
    renderQuestion: (q, index, total) => {
        document.getElementById('quiz-progress').innerText = `Questão ${index + 1}/${total}`;
        document.getElementById('progress-fill').style.width = `${((index + 1) / total) * 100}%`;
        document.getElementById('question-subject').innerText = q.subject;
        document.getElementById('question-text').innerText = q.text;
        
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        
        Object.entries(q.options).forEach(([key, value]) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = `${key}) ${value}`;
            btn.onclick = () => quiz.handleAnswer(btn, key, q.correct);
            container.appendChild(btn);
        });
    }
};

// 🧠 Módulo Principal do Quiz
const quiz = {
    currentQuestions: [],
    currentIndex: 0,
    score: 0,
    stats: {},
    timerInterval: null,
    timeSeconds: 0,

    start: (mode) => {
        let all = storage.getQuestions();
        if (all.length === 0) return alert('⚠️ Nenhuma questão cadastrada! Vá em "Cadastrar".');

        if (mode === 'geral') {
            // Pega até 10 de cada matéria e embaralha
            const subjects = ['Linguagens', 'Humanas', 'Natureza', 'Matemática'];
            quiz.currentQuestions = subjects.flatMap(sub => 
                all.filter(q => q.subject === sub).sort(() => 0.5 - Math.random()).slice(0, 10)
            ).sort(() => 0.5 - Math.random());
        } else {
            // Pega até 40 da matéria específica
            quiz.currentQuestions = all.filter(q => q.subject === mode)
                                       .sort(() => 0.5 - Math.random()).slice(0, 40);
        }

        if (quiz.currentQuestions.length === 0) return alert(`⚠️ Nenhuma questão encontrada para ${mode}.`);

        quiz.currentIndex = 0;
        quiz.score = 0;
        quiz.stats = { Linguagens: {c:0, t:0}, Humanas: {c:0, t:0}, Natureza: {c:0, t:0}, Matemática: {c:0, t:0} };
        
        ui.showScreen('quiz-area');
        quiz.startTimer();
        ui.renderQuestion(quiz.currentQuestions[0], 0, quiz.currentQuestions.length);
    },

    handleAnswer: (btn, selected, correct) => {
        // Trava os botões
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.onclick = null);

        const currentQ = quiz.currentQuestions[quiz.currentIndex];
        quiz.stats[currentQ.subject].t++;

        if (selected === correct) {
            btn.classList.add('correct');
            quiz.score++;
            quiz.stats[currentQ.subject].c++;
        } else {
            btn.classList.add('wrong');
            // Destaca a correta
            Array.from(buttons).find(b => b.innerText.startsWith(correct)).classList.add('correct');
        }

        setTimeout(() => {
            quiz.currentIndex++;
            if (quiz.currentIndex < quiz.currentQuestions.length) {
                ui.renderQuestion(quiz.currentQuestions[quiz.currentIndex], quiz.currentIndex, quiz.currentQuestions.length);
            } else {
                quiz.finish();
            }
        }, 1500); // 1.5s de feedback visual antes de avançar
    },

    startTimer: () => {
        quiz.timeSeconds = 0;
        document.getElementById('quiz-timer').innerText = `⏱️ 00:00`;
        quiz.timerInterval = setInterval(() => {
            quiz.timeSeconds++;
            const m = String(Math.floor(quiz.timeSeconds / 60)).padStart(2, '0');
            const s = String(quiz.timeSeconds % 60).padStart(2, '0');
            document.getElementById('quiz-timer').innerText = `⏱️ ${m}:${s}`;
        }, 1000);
    },

    stopTimer: () => clearInterval(quiz.timerInterval),

    finish: () => {
        quiz.stopTimer();
        ui.showScreen('results');
        
        const total = quiz.currentQuestions.length;
        const percent = Math.round((quiz.score / total) * 100);
        
        document.getElementById('final-score').innerText = `${percent}%`;
        document.getElementById('score-details').innerText = `${quiz.score} acertos de ${total} questões`;

        // Renderiza estatísticas por matéria
        let statsHTML = '<h3>Desempenho por Área:</h3>';
        Object.entries(quiz.stats).forEach(([sub, data]) => {
            if (data.t > 0) {
                const subPercent = Math.round((data.c / data.t) * 100);
                statsHTML += `<p><b>${sub}:</b> ${data.c}/${data.t} (${subPercent}%)</p>`;
            }
        });
        document.getElementById('subject-breakdown').innerHTML = statsHTML;
    }
};