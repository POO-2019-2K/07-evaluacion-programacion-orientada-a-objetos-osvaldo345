import Registros from "./Registros.js"

export default class Tarea {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._actividades = [];
        this._initTables2();
    }

    _initTables2() {
        //localStorage.removeItem("actividades");
        let actividades = JSON.parse(localStorage.getItem("actividades"));
        if (!actividades) {
            return;
        }
        actividades.forEach((tareas, index) => {
            console.log(tareas);
            tareas.final = new Date(tareas.final);
            this._addContacto(new Registros(tareas));
        });
    }

    _cancelEdit(row, tareas) {
        row.cells[0].innerHTML = tareas.num;
        row.cells[1].innerHTML = tareas.tarea;
        row.cells[2].innerHTML = tareas.getFinalAsString();
        row.cells[3].innerHTML = tareas.getAge();
        this._addEditDeleteToRow(row, tareas);
    }

    _saveEdit(row, tareas, newRegistros) {
        let pos = this._findId(tareas.num);
        this._actividades[pos] = newRegistros;
        localStorage.setItem('taller', JSON.stringify(this._actividades));
        this._cancelEdit(row, new Registros(newRegistros));
    }

    _editRow(row, tareas) {
        let iNum = document.createElement('input');
        iNum.type = 'text';
        iNum.value = tareas.num;

        let iTarea = document.createElement('input');
        iTarea.type = 'text';
        iTarea.value = tareas.tarea;

        let iDate = document.createElement('input');
        iDate.type = 'date';
        iDate.value = tareas.getFinalAsString();

        let btnSave = document.createElement('input');
        btnSave.type = 'button';
        btnSave.value = 'Grabar';
        btnSave.className = "btn btn-success";
        btnSave.addEventListener('click', () => {
            let newRegistros = {
                num: iNum.value,
                tarea: iTarea.value,
                final: iDate.value,

            };

            this._saveEdit(row, tareas, newRegistros);
        });

        let btnCancel = document.createElement('input');
        btnCancel.type = 'button';
        btnCancel.value = 'Cancelar';
        btnCancel.className = "btn btn-danger";
        btnCancel.addEventListener('click', () => {
            this._cancelEdit(row, tareas);
        });

        row.cells[0].innerHTML = '';
        row.cells[0].appendChild(iNum);
        row.cells[1].innerHTML = '';
        row.cells[1].appendChild(iTarea);
        row.cells[2].innerHTML = '';
        row.cells[2].appendChild(iDate);
        row.cells[4].innerHTML = '';
        row.cells[4].appendChild(btnSave);
        row.cells[5].innerHTML = '';
        row.cells[5].appendChild(btnCancel);
    }

    _addEditDeleteToRow(row, tareas) {
        let btnEdit = document.createElement("input");
        btnEdit.type = "button";
        btnEdit.value = 'Editar';
        btnEdit.className = 'btn btn-success';
        btnEdit.addEventListener('click', () => {
            this._editRow(row, tareas);
        });

        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = 'Eliminar';
        btnDelete.className = 'btn btn-danger';

        row.cells[4].innerHTML = '';
        row.cells[4].appendChild(btnEdit);
        row.cells[5].innerHTML = '';
        row.cells[5].appendChild(btnDelete);
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
        let cellDif = row.insertCell(3);
        row.insertCell(4);
        row.insertCell(5);


        cellnum.innerHTML = tareas.num;
        cellTarea.innerHTML = tareas.tarea;
        cellfinal.innerHTML = tareas.getFinalAsString();
        cellDif.innerHTML = tareas.getAge();
        this._addEditDeleteToRow(row, tareas);


        let objTareas = {
            num: tareas.num,
            tarea: tareas.tarea,
            final: tareas.final
        }
        this._actividades.push(objTareas);
    }

      /////////////////alfabeticamente//////////////////
    _alfabeticamente(a, b) {
        if (a.tarea < b.tarea) {
            return -1;
        }
        if (a.tarea > b.tarea) {
            return 1;
        }
        return 0;
    }
    _alfa() {
        this._actividades.sort(this._alfabeticamente);
    }
    mostrarAlfabeticamente() {
        this._actividades.sort(this._alfabeticamente);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        location.reload();
    }
    ///////////////////////////////////////////////////////////////
    _numericamente(a, b) {
        if (a.final < b.final) {
            return -1;
        }
        if (a.final > b.final) {
            return 1;
        }
        return 0;
    }
    _num() {
        this._actividades.sort(this._numericamente);
    }
    mostrarNumericamente() {
        this._actividades.sort(this._numericamente);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        location.reload();
    }


    _findId(num) {
        let found = -1

        this._actividades.forEach((tareas, index) => {
            if (tareas.num === num) {
                found = index;
                return;
            }
        });
        return found;
    }


    addEmployee2(tareas) {
        this._addContacto(tareas);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        console.log(localStorage.getItem("actividades"));
    }






}