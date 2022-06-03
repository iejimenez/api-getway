import { url, port, entryPoint } from './server';
import { generalRequest, getRequest } from '../../utilities';

const URL = `http://${url}:${port}/${entryPoint}`;


class StudentService {
    constructor(){
        
    }
    async studentByCod(cod) { 
        return await generalRequest(`${URL}?codigoEstudiante=${cod}`, 'GET');
    }

    async createStudent(student){
        return await generalRequest(`${URL}/`, 'POST', student)
    }
}


export default StudentService;