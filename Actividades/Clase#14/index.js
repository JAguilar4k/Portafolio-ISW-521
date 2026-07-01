//const numbers = [20,15,14,36,100];
//numbers.sort((a, b) => a - b);
//console.log(numbers)

//const declarativo = numbers.map((n)=> n);
//console.log(`${declarativo}`)

const precios = [100,250,80,400];
const caros = precios.filter(p=> p > 150);
console.log(caros)

//const estudiantes = [
  //{ nombre: "Ana", carnet: "2024001" },
  //{ nombre: "Luis", carnet: "2024002" }
//];
//const estFormated = estudiantes.map(e => `${e.nombre}(${e.carnet})`.toUpperCase())
//console.log(estFormated)

const estudiantes = [
  { nombre: "Ana", promedio: 85 },
  { nombre: "Luis", promedio: 67 },
  { nombre: "Sara", promedio: 91 }
];

const promedios = estudiantes.filter(e => e.promedio >=80);
console.log(promedios)

const gastos = [
  { cat: "comida", monto: 5000 },
  { cat: "transporte", monto: 2000 },
  { cat: "comida", monto: 3000 }
];
const total = gastos.reduce((acc, g) => acc + g.monto, 0);
console.log(total)
