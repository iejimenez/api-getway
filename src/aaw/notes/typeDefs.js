


export const noteTypeDef = `
  input NoteInput {
    codigoEstudianteAsignatura: Int!
    codigoCorte: Int!
    nota: Float!
  }`;

export const noteQueries = `
        allNotes: [Int]!
  `;

export const noteMutations = `
    createNotes(note: NoteInput!): Int!
    deleteNote(codEstudianteAsigantrua: Int!, codCorte: Int!): Int!
`;
