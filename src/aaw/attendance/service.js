import { url, port, entryPoint } from './server';
import { generalRequest, getRequest } from '../../utilities';

const URL = `http://${url}:${port}/${entryPoint}`;


class AttendanceService {
    constructor(){
        
    }
    async allAttendances (){
        return await getRequest(`${URL}`, '');
    }
    async attendancesById(id) { 
        return await generalRequest(`${URL}/${id}`, 'GET');
    }
    async attendancesByStudentCod(_class){
        return await generalRequest(`${URL}/StudentCod/${studentCod}`, 'GET');
    }

    async attendancesByclassCod(){
        return await generalRequest(`${URL}/ClassCod/${classCod}`, 'GET');
    }
    async createAttendance(attendance) {
        return generalRequest(`${URL}/`, 'POST', attendance);
    }
    async deleteAttendance(id){
        return generalRequest(`${URL}/${id}`, 'DELETE');
    }
}


export default AttendanceService;