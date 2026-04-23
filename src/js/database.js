// 📦 BANCO DE DADOS FIXO
const bancoDeQuestoes = [
    {
        id: 1001,
        subject: "Matemática",
        text: "Qual é a raiz quadrada de 144?",
        options: {
            A: "10",
            B: "12",
            C: "14",
            D: "16",
            E: "144"
        },
        correct: "B"
    },
    {
        id: 1002,
        subject: "Natureza",
        text: "Qual é o símbolo químico do Ouro?",
        options: {
            A: "Ag",
            B: "O",
            C: "Au",
            D: "Fe",
            E: "Cu"
        },
        correct: "C"
    },
    {   
        id: 1003,
        subject: "Humanas",
        text: "Quem foi o primeiro presidente do Brasil?",
        options: {
            A: "Deodoro da Fonseca",
            B: "Floriano Peixoto",
            C: "Prudente de Morais",
            D: "Nilo Peçanha",
            E: "Washington Luís"
        },
        correct: "A"

    },
    {
        id: 1004,
        subject: "Linguagens",
        text: "Na frase “Estou morrendo de fome”, qual figura de linguagem está presente?",
        options: {
            A: "Metáfora",
            B: "Hipérbole",
            C: "Ironia",
            D: "Eufemismo",
            E: "Antítese"
        },
        correct: "B"
    },
    {
        id: 1005,
        subject: "Linguagens",
        text: "Em “O tempo é um rio que corre sem parar”, temos:",
        options: {
            A: "Comparação",
            B: "Metonímia",
            C: "Metáfora",
            D: "Pleonasmo",
            E: "Paradoxo"
        },
        correct: "C"
    },
    {
        id: 1006,
        subject: "Linguagens",
        text: "Na frase “Ele é rápido como um raio”, ocorre:",
        options: {
            A: "Metáfora",
            B: "Comparação",
            C: "Ironia",
            D: "Hipérbole",
            E: "Personificação"
        },
        correct: "B"
    },
    {
        id: 1007,
        subject: "Linguagens",
        text: "Em “A cidade acordou triste naquela manhã”, a figura de linguagem é:",
        options: {
            A: "Antítese",
            B: "Metonímia",
            C: "Personificação",
            D: "Eufemismo",
            E: "Pleonasmo"
        },
        correct: "C"
    },
    {
        id: 1008,
        subject: "Linguagens",
        text: "Na frase “Li Machado de Assis ontem”, temos:",
        options: {
            A: "Metáfora",
            B: "Hipérbole",
            C: "Metonímia",
            D: "Comparação",
            E: "Ironia"
        },
        correct: "C"
    },
    {
        id: 1009,
        subject: "Linguagens",
        text: "Em “Ele subiu para cima rapidamente”, ocorre:",
        options: {
            A: "Metáfora",
            B: "Pleonasmo",
            C: "Antítese",
            D: "Eufemismo",
            E: "Paradoxo"
        },
        correct: "B"
    },
    {
        id: 1010,
        subject: "Linguagens",
        text: "Na frase “Que belo dia para ficar preso no trânsito!” (dito em tom de irritação), temos:",
        options: {
            A: "Metáfora",
            B: "Ironia",
            C: "Hipérbole",
            D: "Comparação",
            E: "Metonímia"
        },
        correct: "B"
    },
    {
        id: 1011,
        subject: "Linguagens",
        text: "Em “Ela chorou um rio de lágrimas”, a figura predominante é:",
        options: {
            A: "Metonímia",
            B: "Antítese",
            C: "Hipérbole",
            D: "Eufemismo",
            E: "Pleonasmo"
        },
        correct: "C"
    },
    {
        id: 1012,
        subject: "Linguagens",
        text: "Na expressão “silêncio ensurdecedor”, ocorre:",
        options: {
            A: "Metáfora",
            B: "Antítese",
            C: "Paradoxo",
            D: "Comparação",
            E: "Ironia"
        },
        correct: "C"
    },
    {
        id: 1013,
        subject: "Linguagens",
        text: "Em “Ele partiu desta para melhor”, temos:",
        options: {
            A: "Hipérbole",
            B: "Eufemismo",
            C: "Metáfora",
            D: "Ironia",
            E: "Pleonasmo"
        },
        correct: "B"
    },
    {
        id: 1014,
        subject: "Linguagens",
        text: "No trecho: “Nas ruas vazias, os postes cochichavam segredos ao vento”, a figura de linguagem predominante é:",
        options: {
            A: "Metonímia",
            B: "Personificação",
            C: "Catacrese",
            D: "Antítese",
            E: "Eufemismo"
        },
        correct: "B"
    },
    {
        id: 1015,
        subject: "Linguagens",
        text: "Em “Ele carregava nos ombros o peso do mundo”, temos:",
        options: {
            A: "Metonímia",
            B: "Comparação",
            C: "Hipérbole",
            D: "Metáfora",
            E: "Ironia"
        },
        correct: "C"
    },
    {
        id: 1016,
        subject: "Linguagens",
        text: "Leia: “Era um silêncio tão barulhento que incomodava”.\nA figura presente é:",
        options: {
            A: "Antítese",
            B: "Paradoxo",
            C: "Eufemismo",
            D: "Pleonasmo",
            E: "Metonímia"
        },
        correct: "B"
    },
    {
        id: 1017,
        subject: "Linguagens",
        text: "No verso: “Minha alma é um jardim em ruínas”, identifica-se:",
        options: {
            A: "Comparação",
            B: "Metonímia",
            C: "Metáfora",
            D: "Hipérbole",
            E: "Catacrese"
        },
        correct: "C"
    },
    {
        id: 1018,
        subject: "Linguagens",
        text: "Em “Bebi dois copos”, considerando o uso comum da língua, há:",
        options: {
            A: "Metáfora",
            B: "Catacrese",
            C: "Metonímia",
            D: "Ironia",
            E: "Antítese"
        },
        correct: "C"
    },
    {
        id: 1019,
        subject: "Linguagens",
        text: "No trecho: “A vida é curta, mas os dias são longos”, ocorre:",
        options: {
            A: "Paradoxo",
            B: "Metáfora",
            C: "Antítese",
            D: "Pleonasmo",
            E: "Hipérbole"
        },
        correct: "C"
    },
    {
        id: 1020,
        subject: "Linguagens",
        text: "Em “O céu vestiu-se de luto”, a construção evidencia:",
        options: {
            A: "Metonímia",
            B: "Personificação e metáfora",
            C: "Hipérbole",
            D: "Comparação",
            E: "Eufemismo"
        },
        correct: "B"
    },
    {
        id: 1021,
        subject: "Linguagens",
        text: "Leia: “Ele não é muito chegado aos estudos” (referindo-se a alguém que não gosta de estudar).\nA figura de linguagem é:",
        options: {
            A: "Ironia",
            B: "Hipérbole",
            C: "Eufemismo",
            D: "Metáfora",
            E: "Pleonasmo"
        },
        correct: "C"
    },
    {
        id: 1022,
        subject: "Linguagens",
        text: "No enunciado: “Comprei um Picasso para minha sala”, a figura predominante é:",
        options: {
            A: "Metáfora",
            B: "Metonímia",
            C: "Antítese",
            D: "Paradoxo",
            E: "Comparação"
        },
        correct: "B"
    },
    {
        id: 1023,
        subject: "Linguagens",
        text: "Em “Seus olhos eram duas brasas acesas na escuridão”, ocorre:",
        options: {
            A: "Comparação",
            B: "Metonímia",
            C: "Metáfora",
            D: "Catacrese",
            E: "Eufemismo"
        },
        correct: "C"
    },
    {
        id: 1024,
        subject: "Linguagens",
        text: "Leia: “O relógio zombava de mim, arrastando os minutos com crueldade”.\nAs figuras predominantes são:",
        options: {
            A: "Metonímia e antítese",
            B: "Personificação e metáfora",
            C: "Hipérbole e eufemismo",
            D: "Comparação e ironia",
            E: "Pleonasmo e paradoxo"
        },
        correct: "B"
    },
    {
        id: 1025,
        subject: "Linguagens",
        text: "Em “Ele sorriu um sorriso triste”, ocorre:",
        options: {
            A: "Metáfora",
            B: "Pleonasmo",
            C: "Antítese",
            D: "Paradoxo",
            E: "Eufemismo"
        },
        correct: "B"
    },
    {
        id: 1026,
        subject: "Linguagens",
        text: "Leia: “Vivia numa eterna montanha-russa de emoções”.\nA figura principal é:",
        options: {
            A: "Metonímia",
            B: "Comparação",
            C: "Metáfora",
            D: "Catacrese",
            E: "Ironia"
        },
        correct: "C"
    },
    {
        id: 1027,
        subject: "Linguagens",
        text: "No trecho: “Aquele político é um verdadeiro camaleão”, temos:",
        options: {
            A: "Metonímia",
            B: "Metáfora",
            C: "Comparação",
            D: "Eufemismo",
            E: "Antítese"
        },
        correct: "B"
    },
    {
        id: 1028,
        subject: "Linguagens",
        text: "Leia: “O frio queimava sua pele”.\nA figura presente é:",
        options: {
            A: "Paradoxo",
            B: "Antítese",
            C: "Metonímia",
            D: "Hipérbole",
            E: "Pleonasmo"
        },
        correct: "A"
    },
    {
        id: 1029,
        subject: "Linguagens",
        text: "Em “Ouvi o silêncio da noite”, ocorre:",
        options: {
            A: "Metonímia",
            B: "Sinestesia",
            C: "Metáfora",
            D: "Ironia",
            E: "Eufemismo"
        },
        correct: "B"
    },
    {
        id: 1030,
        subject: "Linguagens",
        text: "Leia: “Seus argumentos eram uma muralha intransponível”.\nA figura é:",
        options: {
            A: "Comparação",
            B: "Metonímia",
            C: "Metáfora",
            D: "Hipérbole",
            E: "Antítese"
        },
        correct: "C"
    },
    {
        id: 1031,
        subject: "Linguagens",
        text: "No trecho: “Chorei mares e oceanos naquela despedida”, temos:",
        options: {
            A: "Metonímia",
            B: "Hipérbole",
            C: "Eufemismo",
            D: "Comparação",
            E: "Catacrese"
        },
        correct: "B"
    },
    {
        id: 1032,
        subject: "Linguagens",
        text: "Leia: “Ele vive no mundo da lua”.\nA figura predominante é:",
        options: {
            A: "Metáfora",
            B: "Ironia",
            C: "Metonímia",
            D: "Pleonasmo",
            E: "Antítese"
        },
        correct: "A"
    },
    {
        id: 1033,
        subject: "Linguagens",
        text: "Em “A luz gritava aos meus olhos cansados”, ocorre:",
        options: {
            A: "Sinestesia e personificação",
            B: "Metonímia e antítese",
            C: "Hipérbole e comparação",
            D: "Eufemismo e pleonasmo",
            E: "Paradoxo e ironia"
        },
        correct: "A"
    }
    // Para adicionar mais, basta colocar uma vírgula após a chave } e colar a próxima!


];