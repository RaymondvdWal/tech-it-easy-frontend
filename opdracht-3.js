import {inventory} from "./main.js";

/*const Brands = inventory.map((tvs) =>{
    return tvs.brand
})
console.log(Brands)

const tvBrands = Brands.filter((a, b) => {
    return Brands.indexOf(a) === b;
})
console.log(tvBrands)*/



function brandsWeSell() {
    const Brands = inventory.map((tvs) => {
        return tvs.brand
    })
    const tvBrands = Brands.filter((a, b) => {
        return Brands.indexOf(a) === b;
    })
    const brand = document.getElementById("BrandsWeSold");
    for (let i = 0; i < tvBrands.length; i++) {
        brand.innerHTML += "<ul></ul>" + tvBrands[i]
    }
}

brandsWeSell()