import  AttendanceService  from './service';
import ClassService from '../classes/service';
import StudentService from '../students/service';

const resolvers = {
	Query: {
		allAttendances: (_) => {
			const as = new AttendanceService();
			return as.allAttendances();
		},
		attendancesById: (_, { id }) =>{
			const as = new AttendanceService();
			return as.attendancesById(id);
		},
		attendancesByStudentCod: (_, { studentCod }) =>{
			const as = new AttendanceService();
			return as.attendancesByStudentCod(studentCod);
		},
		attendancesByclassCod: (_, { classCod }) =>{
			const as = new AttendanceService();
			return as.attendancesByclassCod(classCod);
		}
	},
	Mutation: {
		createAttendance: async (_, { attendance }, context) => {
			const attencanceService = new AttendanceService();
			const studentService = new StudentService();
			const classService = new ClassService();
			
			const studentResult = await studentService.studentByCod(attendance.studentCod);
			const classResult = await classService.classById(attendance.classCod);

			console.log(studentResult);
			console.log(classResult);
			if(!studentResult.codigoEstudiante )
				throw new  Error("Estudiante no encontrado.");
			if(!classResult.codigoAsignatura)
				throw new Error("Materia no encontrada.");

			return attencanceService.createAttendance(attendance);
		},
		deleteAttendance: (_, { id }) => {
			const as = new AttendanceService();
			return as.deleteAttendance(id);
		}
	}
};

export default resolvers;
