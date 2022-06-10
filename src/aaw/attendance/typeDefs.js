
export const attendanceTypeDef = `
  type Attendance {
      id: Int!
      studentCod: Int!
      classCod: Int!
      checkDate: Date!
  }
  input AttendanceInput {
        studentCod: Int!
        classCod: Int!
  }`;

export const attendanceQueries = `
      allAttendances: [Attendance]!
      attendancesById(id: Int!): Attendance!
      attendancesByStudentCod(studentCod: Int!): [Attendance]!
      attendancesByclassCod(classCod: Int!): [Attendance]!
  `;

export const attendanceMutations = `
    createAttendance(attendance: AttendanceInput!): Attendance!
    deleteAttendance(id: Int!): Int
`;
