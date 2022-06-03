import  ClassService  from './service';

const resolvers = {
	Query: {
		allClasses: (_) => {
			const cs = new ClassService();
			return cs.allClasses();
		},
			
		classById: (_, { id }) =>{
			const cs = new ClassService();
			return cs.classById(id);
		},
	},
	Mutation: {
		createClass: (_, { _class }) => {
			const cs = new ClassService();
			return cs.createClass(_class);
		}
			
	}
};

export default resolvers;
