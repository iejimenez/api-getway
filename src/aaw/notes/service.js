import { url, port, entryPoint } from './server';
import { generalRequest, getRequest } from '../../utilities';

const URL = `http://${url}:${port}/${entryPoint}`;


class NoteService {
    constructor(){
        
    }
    async allNotes (){
        return await getRequest(`${URL}`, '');
    }
    async createNote(note){
        return await generalRequest(`${URL}/`, 'POST', note);
    }
    async deleteNote(codigoEstudianteAsignatura, codigoCorte){
        return generalRequest(`${URL}?codigoEstudianteAsignatura=${codigoEstudianteAsignatura}&codigoCorte=${codigoCorte}`, 'DELETE');
    }
}


export default NoteService;