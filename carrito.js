document.addEventListener('DOMContentLoaded', () => {
    const cantidadButtons = document.querySelectorAll('.cantidad button');
    const totalDisplay = document.querySelector('.total span');
    const precios = [15, 15, 15]; // Precios de cada galleta

    cantidadButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const cantidadElemento = button.parentElement.querySelector('span');
            let cantidad = parseInt(cantidadElemento.textContent);

            if (button.classList.contains('mas')) {
                cantidad++;
            } else if (button.classList.contains('menos') && cantidad > 0) {
                cantidad--;
            }
            
            cantidadElemento.textContent = cantidad;
            actualizarTotal();
        });
    });

    function actualizarTotal() {
        let total = 0;
        const cantidades = document.querySelectorAll('.cantidad span');
        cantidades.forEach((cantidad, i) => {
            total += parseInt(cantidad.textContent) * precios[i];
        });
        totalDisplay.textContent = `$${total.toFixed(2)}`;
    }

    const confirmarCompraBtn = document.querySelector('.confirmar');
    confirmarCompraBtn.addEventListener('click', () => {
        alert('¡Gracias por tu compra!');
    });
});
