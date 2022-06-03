import  NoteService  from './service';

const resolvers = {
	Query: {
		allClasses: (_) => {
			const ns = new NoteService();
			return ns.allNotes();
		}
	},
	Mutation: {
		createNotes: (_, { note }) => {
			const ns = new NoteService();
			return ns.createNote(note);
		},	
		deleteNote: (_, { codEstudianteAsigantrua, codCorte }) => {
			const ns = new NoteService();
			return ns.deleteNote(codEstudianteAsigantrua, codCorte);
		}			
	}
};

export default resolvers;
