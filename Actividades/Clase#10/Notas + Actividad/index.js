console.log("Hola no expuse ahora")

const v8 = require("v8");

const variableJulian = {
    name: "Javascript",
    version: 2026
};
function showData(data){
console.log(`Datos de prueba:\n${data}`)
}

const tamano = v8.serialize(variableJulian).length
console.log(`El tamano de la variable es de: ${tamano} bytes`);

if(true){
    var temp = 12;
    let phone = "Iphone";
    variableJulian.ced = 119630338;
    //showData((`${temp}\n${phone}\n${variableJulian.ced}`))
}
//showData((`${temp}\n${phone}\n${variableJulian.ced}`))
//showData((`${temp}\n${variableJulian.ced}`))
showData((typeof v8 ,typeof null, typeof 12345678412421490))


var edad = 21
var clasif;
if(edad >= 18){
clasif = "Adulto"
}
else if(edad >= 13 && edad <= 17){
    clasif = "Adolecente"
} else if (edad >= 1 && edad <= 12){
clasif = "Nino"
}else{
    clasif = "No ha nacido"
}
const total = edad >= 18 ?"Adulto": edad >= 13 && edad <= 17 ?"Adolescente" : edad >= 1 && edad <= 12 ? "Nino" : "No ha nacido"
showData(total)

var rol = "admin";
const permiso = rol === "admin" ?"Total": rol === "editor" ?"Lectura-Escritura": rol === "viewer" ?"Solo-Lectura": "Sin-Acceso"
showData(permiso)

//switch (rol){
//    case "admin": 
 //   permiso = "Total" 
  //  case "editor":
  //  permiso = "Lectura-Escritura"
  //  case "viewer": 
  //  permiso = "Solo-Lectura"
  //  default :
 //   permiso = "Sin-Acceso"
//}
