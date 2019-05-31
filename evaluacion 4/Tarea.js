export default class Tarea {
    constructor(tableAgenda){
        this._tableAgenda = tableAgenda;
        
    }




    
    _addContacto(tareas) {
        let row = this._tableAgenda.insertRow(-1);
        let cellnum = row.insertCell(0);
        let cellTarea = row.insertCell(1);
        let cellfinal = row.insertCell(2);


        cellnum.innerHTML = tareas.num;
        cellTarea.innerHTML = tareas.tarea;
        cellfinal.innerHTML = tareas.getFinalAsString();


        let objTareas = {
            num: tareas.num,
            cel: tareas.cel,
            final: tareas.final,
            correo: tareas.correo,
        }
            this._taller2.push(objTareas);
    }
    






}