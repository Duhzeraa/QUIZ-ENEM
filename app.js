// 🛠️ Módulo de Armazenamento e Dados
const storage = {
    getQuestions: () => {
        const questoesLocais = JSON.parse(localStorage.getItem('quiz_questions')) || [];
        const questoesFixas = typeof bancoDeQuestoes !== 'undefined' ? bancoDeQuestoes : [];
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

        const questoesLocais = JSON.parse(localStorage.getItem('quiz_questions')) || [];
        questoesLocais.push(newQuestion);
        localStorage.setItem('quiz_questions', JSON.stringify(questoesLocais));
        
        alert('✅ Questão extra salva com sucesso no navegador!');
        e.target.reset();
        ui.updateDashboard(); // Atualiza painel após cadastrar
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
                ui.updateDashboard(); // Atualiza painel após importar
                
            } catch (error) {
                alert('❌ Erro ao ler o arquivo. Certifique-se de que é um JSON válido.');
                console.error(error);
            }
        };
        reader.readAsText(file);
    },

    // 📤 NOVA FUNÇÃO: Exportar Backup
    exportQuestions: () => {
        const questions = JSON.parse(localStorage.getItem('quiz_questions')) || [];
        if (questions.length === 0) return alert("Nenhuma questão nova para exportar!");

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(questions, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "novas_questoes.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
};

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
    },

    // 📊 NOVA FUNÇÃO: Atualizar Painel Global
    updateDashboard: () => {
        const allQuestions = storage.getQuestions();
        const history = JSON.parse(localStorage.getItem('quiz_history')) || { acertos: 0, erros: 0 };

        const totalRespondidas = history.acertos + history.erros;
        let conclusao = allQuestions.length > 0 ? Math.round((totalRespondidas / allQuestions.length) * 100) : 0;
        if (conclusao > 100) conclusao = 100;

        // Evita erros caso a interface do dashboard não esteja renderizada
        if(document.getElementById('dash-conclusao')) {
            document.getElementById('dash-conclusao').innerText = conclusao;
            document.getElementById('dash-totais').innerText = allQuestions.length;
            document.getElementById('dash-acertos').innerText = history.acertos;
            document.getElementById('dash-erros').innerText = history.erros;
        }
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
            const subjects = ['Linguagens', 'Humanas', 'Natureza', 'Matemática'];
            quiz.currentQuestions = subjects.flatMap(sub => 
                all.filter(q => q.subject === sub).sort(() => 0.5 - Math.random()).slice(0, 10)
            ).sort(() => 0.5 - Math.random());
        } else {
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
            Array.from(buttons).find(b => b.innerText.startsWith(correct)).classList.add('correct');
        }

        setTimeout(() => {
            quiz.currentIndex++;
            if (quiz.currentIndex < quiz.currentQuestions.length) {
                ui.renderQuestion(quiz.currentQuestions[quiz.currentIndex], quiz.currentIndex, quiz.currentQuestions.length);
            } else {
                quiz.finish();
            }
        }, 1500); 
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

        let statsHTML = '<h3>Desempenho por Área:</h3>';
        Object.entries(quiz.stats).forEach(([sub, data]) => {
            if (data.t > 0) {
                const subPercent = Math.round((data.c / data.t) * 100);
                statsHTML += `<p><b>${sub}:</b> ${data.c}/${data.t} (${subPercent}%)</p>`;
            }
        });
        document.getElementById('subject-breakdown').innerHTML = statsHTML;

        // 💾 Salva no histórico global
        const history = JSON.parse(localStorage.getItem('quiz_history')) || { acertos: 0, erros: 0 };
        history.acertos += quiz.score;
        history.erros += (total - quiz.score);
        localStorage.setItem('quiz_history', JSON.stringify(history));
        
        // Atualiza o painel
        ui.updateDashboard();
    }
};

// 🚀 Inicia o dashboard assim que o app carrega
ui.updateDashboard();