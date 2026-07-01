import * as pedido from ".pedidos.js";
import * as ui from ".ui.js";

var nombreSoda = "La Sodita UTN";
var datosAna = ({cliente:"Ana", producto:"Casado", precio: 2500},"Sin cebolla")
var datosLuis = ({cliente:"Luis", producto:"Cafe con pan", precio: 1200}, undefined)
 
pedido.crearPedido(datosAna);
pedido.crearPedido(datosLuis);

