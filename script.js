const initialPrice = document.getElementById("initial-price");
const currPrice = document.getElementById("current-price");
const stockQuantity = document.getElementById("stock-quantity");

const form = document.getElementById("form");
const resultBox = document.getElementById("result-box");

form.addEventListener("submit", (e) => {
    e.preventDefault();

	const initialPriceValue = Number(initialPrice.value);
	const currPriceValue = Number(currPrice.value);
	const stockQuantityValue = Number(stockQuantity.value);

	const profitLoss = Math.abs(currPriceValue - initialPriceValue);
	const profitLossPercentage = ((profitLoss / initialPriceValue) * 100).toFixed(2);
	const totalProfitLoss = (profitLoss * stockQuantityValue).toFixed(2);

	if (initialPriceValue > currPriceValue) {
		resultBox.innerHTML = `<p>You lost &#x20B9;${totalProfitLoss} and loss percentage is ${profitLossPercentage}%.</p>`;
	} else {
		resultBox.innerHTML = `<p>You gained &#x20B9;${totalProfitLoss} and profit percentage is ${profitLossPercentage}%.</p>`;
	}
});
