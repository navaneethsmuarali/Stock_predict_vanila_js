const initialPrice = document.getElementById('initial_price');
const stockQuantity = document.getElementById('stock_quatity');
const currentPrice = document.getElementById('current_price');
const button = document.getElementById('clickme');
const output = document.getElementById('output');

button.addEventListener('click', handleInput);

function handleInput() {
    const initial = parseFloat(initialPrice.value);
    const quantity = parseFloat(stockQuantity.value);
    const current = parseFloat(currentPrice.value);

    if (isNaN(initial) || isNaN(quantity) || isNaN(current) || quantity <= 0 || initial <= 0 || current <= 0) {
        output.innerText = 'Please enter valid positive values for all inputs.';
        output.style.color = 'red';
        return;
    }

    calculateProfitLoss(initial, quantity, current);
}

function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        const loss = (initial - current) * quantity;
        const lossPercentage = (loss / (initial * quantity)) * 100;
        output.innerText = `Your loss is ${loss} and loss percentage is ${lossPercentage.toFixed(2)}%`;
        output.style.color = 'red';
    } else if (current > initial) {
        const profit = (current - initial) * quantity;
        const profitPercentage = (profit / (initial * quantity)) * 100;
        output.innerText = `Your profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)}%`;
        output.style.color = 'green';
    } else {
        output.innerText = 'No profit, no loss';
        output.style.color = 'black';
    }
}
