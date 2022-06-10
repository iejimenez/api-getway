


export const noteTypeDef = `
scalar Date

  type Usuario {
    codigoUsuario: Int!
    login: String!
    nombreUsuario: String!
    codigoDocente: Int!
    codigoEstudiante: Int!
  }
  type Corte {
    nombreCorte: String!
    fecha: Date!
  }
  type Asignatura {
    codigoAsignatura: Int!
    nombreAsignatura: String!
  }
  type Nota {
    codigoEstudianteAsignatura: Int!
    codigoUniversitario: String!
    nombreEstudiante: String!
    identificacion: String!
    nota: Float!
    publicada: Boolean!
  }
  type ResponseString {
    respuesta: String!
  }
  type ResponseInt {
    codigoRespuesta: Int!
  }
  input NoteInput {
    codigoEstudianteAsignatura: Int!
    codigoCorte: Int!
    nota: Float!
  }`;

export const noteQueries = `
        getUsuario(login: String!, password: String!): Usuario!
        getCorte(codigoCorte: Int!): Corte!
        getAsignaturasDocente(codigoDocente: Int!): [Asignatura]!
        getNotasAsignatura(codigoAsignatura: Int!, codigoCorte: Int!): [Nota]!
        getNombreDocente(codigoDocente: Int!): ResponseString!
        allNotes: [Int]!
  `;

export const noteMutations = `
    createNotes(note: NoteInput!): ResponseInt!
    deleteNote(codigoEstudianteAsignatura: Int!, codigoCorte: Int!): ResponseInt!
`;
