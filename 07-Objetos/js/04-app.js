/*Destructuring de objetos*/
const producto = {
  nombre: "Monitor TV",
  precio: 1000,
  disponible: true,
};
// 1 queremos acceder al nombre con sintaxis de punto
console.log(producto.nombre); // imprime "Monitor TV" en consola
//2 si quiero asignar su valor a su misma variable
//const nombre = producto.nombre;
//console.log(nombre);
//por medio de la creación de una nueva variable podemos extraer el valor de la llave e imprimirla en consola
//destructuring en la nueva versión de EMMA se simplifica la sintaxis
/* const { nombre } = producto; // const {variableNueva} = "dedonde se extrae"
console.log(nombre); */

// Tambien si son llaves del mismo objeto
/* const { precio } = producto;
console.log(precio);

const { disponible } = producto;
console.log(disponible);

producto.popo = "quiero follarme a una chica tetona y bella ";

const { popo } = producto;
console.log(popo); */

const { nombre, precio, disponible } = producto;
console.log(nombre, precio, disponible);
