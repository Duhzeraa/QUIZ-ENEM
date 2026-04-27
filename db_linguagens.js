const questoesLinguagens = [
  // 🎭 FIGURAS DE LINGUAGEM E SEMÂNTICA
  { id: 1, subject: "Linguagens", text: "A linguagem denotativa caracteriza-se por:", options: { A: "Sentido figurado", B: "Ambiguidade", C: "Sentido literal", D: "Ironia", E: "Duplo sentido" }, correct: "C" },
  { id: 2, subject: "Linguagens", text: "Metáfora é:", options: { A: "Comparação com conectivo", B: "Exagero", C: "Substituição implícita", D: "Contradição", E: "Repetição" }, correct: "C" },
  { id: 3, subject: "Linguagens", text: "Ironia ocorre quando:", options: { A: "Exagera", B: "Diz o oposto", C: "Compara", D: "Repete", E: "Define" }, correct: "B" },
  { id: 4, subject: "Linguagens", text: "Ambiguidade é:", options: { A: "Um sentido", B: "Dois sentidos", C: "Erro", D: "Figura sonora", E: "Comparação" }, correct: "B" },
  { id: 5, subject: "Linguagens", text: "Antítese é:", options: { A: "Semelhança", B: "Oposição de ideias", C: "Exagero", D: "Comparação", E: "Repetição" }, correct: "B" },
  { id: 6, subject: "Linguagens", text: "Denotação refere-se:", options: { A: "Sentido figurado", B: "Sentido real", C: "Duplo sentido", D: "Ironia", E: "Metáfora" }, correct: "B" },
  { id: 7, subject: "Linguagens", text: "Conotação refere-se:", options: { A: "Sentido literal", B: "Sentido figurado", C: "Erro", D: "Gramática", E: "Regra" }, correct: "B" },
  { id: 8, subject: "Linguagens", text: "Hipérbole é:", options: { A: "Comparação", B: "Exagero", C: "Oposição", D: "Repetição", E: "Ironia" }, correct: "B" },
  { id: 9, subject: "Linguagens", text: "Paródia é:", options: { A: "Imitação crítica", B: "Erro", C: "Resumo", D: "Explicação", E: "Regra" }, correct: "A" },

  // 🗣️ FUNÇÕES DA LINGUAGEM
  { id: 10, subject: "Linguagens", text: "A função da linguagem predominante em textos científicos é:", options: { A: "Emotiva", B: "Referencial", C: "Poética", D: "Fática", E: "Conativa" }, correct: "B" },
  { id: 11, subject: "Linguagens", text: "A função conativa tem foco:", options: { A: "Emissor", B: "Mensagem", C: "Receptor", D: "Canal", E: "Código" }, correct: "C" },
  { id: 12, subject: "Linguagens", text: "Função fática foca:", options: { A: "Canal", B: "Emissor", C: "Receptor", D: "Mensagem", E: "Código" }, correct: "A" },
  { id: 13, subject: "Linguagens", text: "Função poética foca:", options: { A: "Mensagem", B: "Emissor", C: "Receptor", D: "Canal", E: "Código" }, correct: "A" },
  { id: 14, subject: "Linguagens", text: "Função emotiva foca:", options: { A: "Receptor", B: "Mensagem", C: "Emissor", D: "Código", E: "Canal" }, correct: "C" },
  { id: 15, subject: "Linguagens", text: "Função metalinguística foca:", options: { A: "Código", B: "Mensagem", C: "Receptor", D: "Canal", E: "Emissor" }, correct: "A" },

  // 📝 INTERPRETAÇÃO, TIPOLOGIA E COESÃO TEXTUAL
  { id: 16, subject: "Linguagens", text: "A coesão textual refere-se:", options: { A: "Ideia central", B: "Ligação entre partes", C: "Opinião", D: "Tema", E: "Título" }, correct: "B" },
  { id: 17, subject: "Linguagens", text: "Intertextualidade ocorre quando:", options: { A: "Erro gramatical", B: "Texto dialoga com outro", C: "Texto é curto", D: "Texto é formal", E: "Texto é científico" }, correct: "B" },
  { id: 18, subject: "Linguagens", text: "Um texto narrativo apresenta:", options: { A: "Argumentos", B: "Personagens e enredo", C: "Dados", D: "Leis", E: "Regras" }, correct: "B" },
  { id: 19, subject: "Linguagens", text: "Coerência textual é:", options: { A: "Ligação gramatical", B: "Sentido lógico", C: "Ortografia", D: "Pontuação", E: "Título" }, correct: "B" },
  { id: 20, subject: "Linguagens", text: "Texto injuntivo tem função:", options: { A: "Narrar", B: "Instruir", C: "Argumentar", D: "Descrever", E: "Explicar" }, correct: "B" },
  { id: 21, subject: "Linguagens", text: "Em um texto, a ideia principal é:", options: { A: "Detalhe secundário", B: "Tema central", C: "Erro", D: "Exemplo", E: "Título" }, correct: "B" },
  { id: 22, subject: "Linguagens", text: "Inferir significa:", options: { A: "Copiar", B: "Deduzir", C: "Ignorar", D: "Traduzir", E: "Repetir" }, correct: "B" },
  { id: 23, subject: "Linguagens", text: "O objetivo do autor pode ser identificado por:", options: { A: "Título apenas", B: "Contexto e argumentos", C: "Erro", D: "Ortografia", E: "Pontuação" }, correct: "B" },
  { id: 24, subject: "Linguagens", text: "Um argumento válido apresenta:", options: { A: "Opinião sem base", B: "Justificativa", C: "Erro", D: "Narrativa", E: "Repetição" }, correct: "B" },
  { id: 25, subject: "Linguagens", text: "Texto publicitário busca:", options: { A: "Informar", B: "Convencer", C: "Narrar", D: "Descrever", E: "Explicar" }, correct: "B" },
  { id: 26, subject: "Linguagens", text: "A tese de um texto é:", options: { A: "Detalhe", B: "Ideia defendida", C: "Erro", D: "Exemplo", E: "Resumo" }, correct: "B" },
  { id: 27, subject: "Linguagens", text: "Argumento de exemplo consiste em:", options: { A: "Citar caso", B: "Opinar", C: "Errar", D: "Narrar", E: "Comparar" }, correct: "A" },
  { id: 28, subject: "Linguagens", text: "Conectivos servem para:", options: { A: "Separar", B: "Conectar ideias", C: "Erro", D: "Reduzir texto", E: "Enfeitar" }, correct: "B" },
  { id: 29, subject: "Linguagens", text: "Coesão referencial usa:", options: { A: "Repetição", B: "Substituição", C: "Erro", D: "Título", E: "Imagem" }, correct: "B" },
  { id: 30, subject: "Linguagens", text: "O contexto influencia:", options: { A: "Nada", B: "Sentido", C: "Erro", D: "Forma", E: "Título" }, correct: "B" }
];