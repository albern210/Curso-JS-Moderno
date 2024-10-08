const producto = {
  nombre: "Encendedor tokai",
  precio: 1150,
  disponible: true,
};
console.log(producto);

//Agregar nuevas propiedades al objeto
producto.popo = "Es una mierda";

//Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);

console.log(producto.popo);
console.log(producto["nombre"]);
