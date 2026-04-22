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

    }
    // Para adicionar mais, basta colocar uma vírgula após a chave } e colar a próxima!
];