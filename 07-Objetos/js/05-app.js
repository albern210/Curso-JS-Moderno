const producto = {
  //objeto anidado
  nombre: "Monitor TV",
  precio: 1000,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1 Kg",
      medida: "1 m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

console.log(producto);

// para acceder al objeto dentro del objeto
console.log(producto.informacion);
//si quiere acceder a una propiedad del objeto dentro del objeto
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);

producto.informacion.popo = "Suaves pezones";

console.log(producto.informacion.popo);

console.log(producto.informacion.medidas.peso);
