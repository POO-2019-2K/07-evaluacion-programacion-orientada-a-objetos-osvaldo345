export default class Registros {
    constructor(tareas) {
        this._num = tareas.num;
        this._tarea =  tareas.tarea.toUpperCase();
        this._final = new Date(tareas.final);
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

    get final(){
        return this._final;
    }

    _getNumberAsTwoDigits(final) {
        if (final < 10){
            return "0" + final;
        }
        return final;
    }

    getFechaForDate(){
        let { final } = this;
        let date2 = this._getNumberAsTwoDigits(final.getDate())+1 + '-' + this._getNumberAsTwoDigits(final.getMonth()+1) + '-' + this._getNumberAsTwoDigits(final.getFullYear());
    return date2;
    }


    getFinalAsString(){
        let d = this._final.getDate()+ "/" + this._months[this._final.getMonth()] + "/" + this._final.getFullYear();
        return d;
    }


    ////////////////////calculo de los dias restantes//////////////////////////////
    getAge() {
        let oneDay = (24 * 60 * 60 * 1000);

        let differenceMs = Math.abs(this._final - new Date());
        return Math.round(differenceMs / oneDay) + 1;
    }
}