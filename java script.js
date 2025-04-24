document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.add-btn');
    const carrito = [];

    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.parentElement.querySelector('h3').innerText;
            const productPrice = parseFloat(this.parentElement.querySelector('p').innerText.replace('$', ''));

            const productoExistente = carrito.find(item => item.nombre === productName);
            
            if (productoExistente) {
                productoExistente.cantidad++;
            } else {
                carrito.push({ nombre: productName, precio: productPrice, cantidad: 1 });
            }

            actualizarCarrito();
        });
    });

    function actualizarCarrito() {
        let total = 0;
        carrito.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        alert(`🛒 Se ha actualizado el carrito. Total: $${total.toFixed(2)}`);
    }
});