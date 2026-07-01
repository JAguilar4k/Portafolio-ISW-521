export var pedidos = [];
export function crearPedido({cliente, producto, precio}, ...notas) {
  var pedido = {
    cliente: datos.cliente,
    producto: datos.producto,
    precio: datos.precio,
    notas: datos.notas
  };
  pedidos.push(pedido);
  //
  return pedido;
}

export function calcularTotalDia() {
  let total = 0;
  for (let i = 0; i < pedidos.length; i++) {
    total = total + pedidos[i].precio;
  }
  return total;
}
 
export function aplicarDescuento(pedido, porcentaje) {
  pedido.precio = pedido.precio - (pedido.precio * porcentaje / 100);
  return pedido;
}