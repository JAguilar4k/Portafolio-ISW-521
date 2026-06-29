function orden(comida){
    return `Su orden de: ${comida} esta siendo procesada`;
}
function procesar (funcionOrden, comida){
    return funcionOrden(comida).toUpperCase();
}
console.log(procesar(orden, "Hamburguesa con papas"));

const persona = { nombre: "Luis", edad: 30, rol: "dev" };
const { nombre, rol: puesto = "invitado" } = persona;

const colores = ["rojo", "verde", "azul"];
const [primero, , tercero] = colores;

console.log(nombre, puesto);   // Luis dev
console.log(primero, tercero); // rojo azul
console.log(persona)

function sumarTodo(...numeros) {
  return numeros.reduce((acum, n) => acum + n, 0);
}

console.log(sumarTodo(1, 2,4,5,6,12));       // 6
console.log(sumarTodo(5, 10, 15, 20)); // 50

const original = { nombre: "Equipo A", puntos: 10 };
const actualizado = { ...original, puntos: 15 };

console.log(original.puntos);    // 10 (no cambió)
console.log(actualizado.puntos); // 15

const numeros = [1, 2, 3];
const copia = [...numeros, 4];
console.log(copia);

import * as matematica from "./basicOperations.js";
console.log(matematica.sumar(1, 2));
import {Perro} from "./perro.js";
const Trufa = new Perro(0,"Trufa","Bichon","negro");
Trufa.ladrar()