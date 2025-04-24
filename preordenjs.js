document.addEventListener('DOMContentLoaded', () => {
    const quantities = document.querySelectorAll('.quantity');
    const totalPriceElement = document.querySelector('.total-price');

    const prices = [30, 15, 45, 45]; // Precios en el mismo orden que los productos
    let total = 0;

    quantities.forEach((quantity, index) => {
        const minusBtn = document.createElement('button');
        const plusBtn = document.createElement('button');
        const countElement = document.createElement('span');

        minusBtn.textContent = '-';
        plusBtn.textContent = '+';
        countElement.textContent = '2'; // Valor inicial (ajústalo según cada producto)

        minusBtn.addEventListener('click', () => {
            let count = parseInt(countElement.textContent);
            if (count > 0) count--;
            countElement.textContent = count;
            updateTotal();
        });

        plusBtn.addEventListener('click', () => {
            let count = parseInt(countElement.textContent);
            count++;
            countElement.textContent = count;
            updateTotal();
        });

        quantity.innerHTML = '';
        quantity.appendChild(minusBtn);
        quantity.appendChild(countElement);
        quantity.appendChild(plusBtn);
    });

    function updateTotal() {
        total = 0;
        quantities.forEach((quantity, index) => {
            const count = parseInt(quantity.querySelector('span').textContent);
            total += prices[index] * count;
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    updateTotal();
});
