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

// DESTRUCTURING EN OBJETOS ANIDADOS:

const {
  informacion: { medidas },
  informacion: {
    fabricacion: { pais },
  },
  informacion: {
    medidas: { peso },
  },
} = producto;
console.log(peso);
