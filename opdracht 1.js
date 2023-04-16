import {inventory} from "./main.js";
import {tvWeSell} from "./opdracht-4.js";

const tvType = inventory.map((tvs) => {
    return  tvs.type;
})
console.log(tvType);

const soldOut = inventory.filter((tvs) => {
    return tvs.originalStock - tvs.sold === 0;
})
console.log(soldOut)

const ambilight = inventory.filter((tvs) => {
    return tvs.options.ambiLight === true;
})
console.log(ambilight)

function sortHL() {
    document.getElementById("sortPrice").addEventListener("click",sortHL)
    let sort;
    for (let i = 0; i < tvWeSell().length; i++) {
        sort = tvWeSell().sort()
    }
    return sort
}
console.log(sortHL())

const sortLowHigh = document.getElementById("sortPrice")
sortLowHigh.addEventListener('click',sortHL)