class Producto {
  constructor(id,nombre, precio, disponible) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }
}

const CrearProducto = (id, nombre, precio, disponible)=>{
  const nuevoProducto = new Producto(id,nombre, precio, disponible);
  return nuevoProducto;
}

module.exports={
  CrearProducto
}
