import { url, port, entryPoint } from './server';
import { generalRequest, getRequest } from '../../utilities';

const URL = `http://${url}:${port}/${entryPoint}`;


class ClassService {
    constructor(){
        
    }
    async allClasses (){
        return await getRequest(`${URL}`, '');
    }
    async classById(id) { 
        return await generalRequest(`${URL}/id?codigoAsignatura=${id}`, 'GET');
    }
    async createClass(_class){
        return await generalRequest(`${URL}/`, 'POST', _class);
    }
}


export default ClassService;