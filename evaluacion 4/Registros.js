export default class Registros {
    constructor(Contacto) {
        this._num = Contacto.num;
        this._tarea =  Contacto.tarea.toUpperCase();
        this._final = Contacto.final;
    }

    get num(){
        return this._num;
    }

    get tarea(){
        return this._tarea;
    }
    

    getFinalAsString(){
        let d = this._final.getDate()+ "/" + this._final.getMonth() + "/" + this._final.getFullYear();
        return d;
    }

    get final(){
        return this._final;
    }

}