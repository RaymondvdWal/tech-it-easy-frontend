import {inventory} from "./main.js";

const tvSoldTotal = inventory.reduce((previousValue, currentValue) => previousValue + currentValue.sold, 0);
console.log(tvSoldTotal)

const sold = document.getElementById("tvSold");
sold.innerHTML = tvSoldTotal.toString()

const tvInStock = inventory.reduce((previousValue, currentValue) =>
previousValue + currentValue.originalStock, 0)
console.log(tvInStock);

const stock = document.getElementById("tvInStock");
stock.innerHTML = tvInStock.toString()

const tvLeft = tvInStock - tvSoldTotal;
console.log(tvLeft);

const left = document.getElementById("tvLeft");
left.innerHTML = tvLeft.toString();