import Tarea from "./Tarea.js";
import Registros from "./Registros.js";

class Main {
    constructor() {
        this._agenda = new Tarea(document.querySelector("#agenda"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let num = document.querySelector("#num").value;
            let tarea = document.querySelector("#tarea").value;
            let sFinal = document.querySelector("#final").value;
            sFinal = sFinal.split('-');


            let final = new Date(sFinal[0], sFinal[1], sFinal[2]);


            let objTareas = {
                num: num,
                tarea: tarea,
                final: final
            }


            let tareas = new Registros(objTareas);

            this._agenda.addEmployee2(tareas);
        });
        document.querySelector("#btnNom").addEventListener("click", () => {
            this._agenda.mostrarAlfabeticamente();
        });
        document.querySelector("#btnDias").addEventListener("click", () => {
            this._agenda.mostrarNumericamente();
        });

    }


}

new Main();