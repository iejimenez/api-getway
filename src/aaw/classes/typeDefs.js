


export const classTypeDef = `

  type Class {
    codigoAsignatura: Int!
    nombreAsignatura: String!
  }
  input ClassInput {
    codigoAsignatura: Int!
    nombreAsignatura: String!
  }`;

export const classQueries = `
        allClasses: [Class]!
        classById(id: Int!): Class!
  `;

export const classMutations = `
    createClass(class: ClassInput!): Class!
`;
