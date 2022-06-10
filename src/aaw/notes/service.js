import { url, port, entryPoint } from './server';
import { generalRequest, getRequest } from '../../utilities';

const URL = `http://${url}:${port}/${entryPoint}`;


class NoteService {
    constructor(){
        
    }
    async getUsuario (login, password){
        return await generalRequest(`${URL}usuarios?login=${login}&password=${password}`, 'GET');
    }
    async getCorte (codigoCorte){
        return await generalRequest(`${URL}cortes?codigoCorte=${codigoCorte}`, 'GET');
    }
    async getAsignaturasDocente (codigoDocente){
        return await generalRequest(`${URL}asignaturas/docente?codigoDocente=${codigoDocente}`, 'GET');
    }
    async getNotasAsignatura (codigoAsignatura, codigoCorte){
        return await generalRequest(`${URL}notas?codigoAsignatura=${codigoAsignatura}&codigoCorte=${codigoCorte}`, 'GET');
    }
    async getNombreDocente (codigoDocente){
        return await generalRequest(`${URL}docentes?codigoDocente=${codigoDocente}`, 'GET');
    }
    async allNotes (){
        return await getRequest(`${URL}`, '');
    }
    async createNote(note){
        return await generalRequest(`${URL}notas`, 'POST', note);
    }
    async deleteNote(codigoEstudianteAsignatura, codigoCorte){
        return generalRequest(`${URL}notas?codigoEstudianteAsignatura=${codigoEstudianteAsignatura}&codigoCorte=${codigoCorte}`, 'DELETE');
    }
}


export default NoteService;