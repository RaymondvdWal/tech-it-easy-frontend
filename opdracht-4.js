import {inventory} from "./main.js";

function newTv(merk,type,naam) {
    return `${merk} ${type} - ${naam}`
}

function tvList(){
    return inventory.map((tvs) => {
       return newTv(tvs.brand,tvs.type,tvs.name)
    })
}

console.log(tvList())

function priceTv(prijs) {
    return `${prijs},-`
}

function priceList() {
    return inventory.map((tvs) => {
        return priceTv(tvs.price)
    })
}
function sizeList() {
    const inchConverter = 2.54;
    return inventory.map((tvs) => {
        return tvs.availableSizes.map((size) => {
            return `${size} inch (${Math.round(size*inchConverter)}) cm`
        }).join(" | ")
    })
}

console.log(sizeList())

export function tvWeSell() {
  return tvList().map((type,index) =>{
      return [[type], priceList().map((price) => {return [price]})[index], sizeList().map((size) => {return [size]})[index]]
      })
}
console.log(tvWeSell())


const offer = document.getElementById("offer");

    offer.innerHTML += "<ul></ul>"+"-".repeat(150)
for (let i = 0; i < tvWeSell().length; i++) {
    offer.innerHTML += "<ul></ul>"+tvWeSell()[i][0]
    offer.innerHTML += "<ul></ul>"+tvWeSell()[i][1]
    offer.innerHTML += "<ul></ul>"+tvWeSell()[i][2]
    offer.innerHTML += "<ul></ul>"+"-".repeat(150)

}


