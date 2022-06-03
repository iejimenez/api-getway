


export const studentTypeDef = `


  type Student {
    codigoEstudiante: Int!
    codigoUniversitario: String!
    tipoId: String!
    id: String!
    nombre1: String!
    nombre2: String!
    apellido1: String!
    apellido2: String!
    fechaNacimiento: Date
    direccion: String!
    telefono: String!
    email: String!
  }
  input StudentInput {
    codigoUniversitario: String!
    tipoId: String!
    id: String!
    nombre1: String!
    nombre2: String!
    apellido1: String!
    apellido2: String!
    fechaNacimiento: Date
    direccion: String!
    telefono: String!
    email: String!
  }`;

export const studentQueries = `
    studentByCod(cod: Int!): Student!
  `;

export const studentMutations = `
    createStudent(student: StudentInput!): Student!
`;
