import  StudentService  from './service';

const resolvers = {
	Query: {
		studentByCod: (_, { cod }) => {
			const ss = new StudentService();
			return ss.studentByCod(cod);
		}
	},
	Mutation: {
		createStudent: (_, { student }) =>{
			const ss = new StudentService();
			return ss.createStudent(cod);
		}
	}
};

export default resolvers;
