function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  let productoExistente = carrito.find(item => item.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(`${nombre} añadido al carrito.`);
}