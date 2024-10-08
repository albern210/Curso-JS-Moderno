"use strict";

const producto = {
  nombre: "Monitor TV",
  precio: 1000,
  disponible: true,
};
//¿como hacemos para que las propiedasde de un objeto no se puedan modificar se debe agregar en la cabecera el modo estricto para exigir que cumpla las reglas estrictas para javascript ;

//usaremos el metodo Object.frezee() con el bloque la posibilidad de que se pueda modificar las propiedades del objeto

Object.frezee(producto);
delete producto.precio;
