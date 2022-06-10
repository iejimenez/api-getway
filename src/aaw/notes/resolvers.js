import  NoteService  from './service';

const resolvers = {
	Query: { 
		getUsuario: (_, { login, password }) =>{
			const as = new NoteService();
			return as.getUsuario(login, password);
		},
		getCorte: (_, { codigoCorte }) =>{
			const as = new NoteService();
			return as.getCorte(codigoCorte);
		},
		getAsignaturasDocente: (_, { codigoDocente }) =>{
			const as = new NoteService();
			return as.getAsignaturasDocente(codigoDocente);
		},
		getNotasAsignatura: (_, { codigoAsignatura, codigoCorte }) =>{
			const as = new NoteService();
			return as.getNotasAsignatura(codigoAsignatura, codigoCorte);
		},
		getNombreDocente: (_, { codigoDocente }) =>{
			const as = new NoteService();
			return as.getNombreDocente(codigoDocente);
		},
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
		deleteNote: (_, { codigoEstudianteAsignatura, codigoCorte }) => {
			const ns = new NoteService();
			return ns.deleteNote(codigoEstudianteAsignatura, codigoCorte);
		}			
	}
};

export default resolvers;
