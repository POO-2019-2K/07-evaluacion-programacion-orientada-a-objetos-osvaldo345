export default class Tarea {
    constructor(tableAgenda){
        this._tableAgenda = tableAgenda;
        this._actividades = [];
        this._initTables2(); 
    }

_initTables2() {
    //localStorage.removeItem("actividades");
    let actividades = JSON.parse(localStorage.getItem("actividades"));
    if(!actividades) {
    return;
    }
    actividades.forEach( (tareas, index) => {
    console.log(tareas);
    tareas.final = new Date(tareas.final);
    this._addContacto(new Registros(tareas));
    });
}

_addEditDeleteToRow(row, tareas) {
    let btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.value = 'Eliminar';
    btnDelete.className = 'btn btn-danger';

    row.cells[3].innerHTML = '';
    row.cells[3].appendChild(btnDelete);
    btnDelete.addEventListener('click', () => {
        this._actividades.splice(tareas, 1);
        row.innerHTML = "";
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        return;
    });
}


    
    _addContacto(tareas) {
        let row = this._tableAgenda.insertRow(-1);
        let cellnum = row.insertCell(0);
        let cellTarea = row.insertCell(1);
        let cellfinal = row.insertCell(2);
        row.insertCell(3);


        cellnum.innerHTML = tareas.num;
        cellTarea.innerHTML = tareas.tarea;
        cellfinal.innerHTML = tareas.getFinalAsString();
        this._addEditDeleteToRow(row, tareas);


        let objTareas = {
            num: tareas.num,
            cel: tareas.cel,
            final: tareas.final,
            correo: tareas.correo,
        }
            this._actividades.push(objTareas);
    }
    
    addEmployee2(tareas) {
        this._addContacto(tareas);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        console.log(localStorage.getItem("actividades"));
    }






}