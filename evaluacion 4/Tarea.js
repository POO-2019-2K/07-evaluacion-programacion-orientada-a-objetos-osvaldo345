export default class Tarea {
    constructor(tableAgenda){
        this._tableAgenda = tableAgenda;
    }




    
    _addContacto(Contacto) {
        let row = this._tableAgenda.insertRow(-1);
        let cellnum = row.insertCell(0);
        let cellTarea = row.insertCell(1);
        let cellBirthday = row.insertCell(2);


        cellnum.innerHTML = Contacto.num;
        cellTarea.innerHTML = Contacto.tarea;
        cellBirthday.innerHTML = Contacto.getBirthdayAsString();


        let objContacto = {
            num: Contacto.num,
            cel: Contacto.cel,
            birthday: Contacto.birthday,
            correo: Contacto.correo,
        }
            this._taller2.push(objContacto);
    }
    






}