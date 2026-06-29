import {animal} from "./animal.js";
export class Perro extends animal{
    constructor(id, nombre, raza, color){
        super(id,nombre);
        this.raza = raza;
        this.color = color;
    }
    ladrar(){
        super.sonido()
        console.log("Guau")
    }
}
