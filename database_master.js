window.bancoDeQuestoes = [
    ...(typeof questoesNatureza !== 'undefined' ? questoesNatureza : []),
    ...(typeof questoesMatematica !== 'undefined' ? questoesMatematica : []),
    ...(typeof questoesHumanas !== 'undefined' ? questoesHumanas : []),
    ...(typeof questoesLinguagens !== 'undefined' ? questoesLinguagens : [])
];