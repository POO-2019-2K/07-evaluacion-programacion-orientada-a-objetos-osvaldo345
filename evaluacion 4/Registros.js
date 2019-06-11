export default class Registros {
    constructor(tareas) {
        this._num = tareas.num;
        this._tarea =  tareas.tarea.toUpperCase();
        this._final = tareas.final;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
    }

    get num(){
        return this._num;
    }

    get tarea(){
        return this._tarea;
    }
    

    getFinalAsString(){
        let d = this._final.getDate()+ "/" + this._months[this._final.getMonth()] + "/" + this._final.getFullYear();
        return d;
    }

    get final(){
        return this._final;
    }

    ////////////////////calculo de la edad//////////////////////////////
    getAge() {
        let oneDay = (24 * 60 * 60 * 1000);

        let differenceMs = Math.abs(new Date() - this._final);
        return Math.round(differenceMs / oneDay);
    }
}