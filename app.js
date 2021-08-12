// grabbing all id 

let toggle = document.getElementById('toggle')
let priceBasic = document.getElementById('price_basic')
let pricePro = document.getElementById('price_professional')
let priceMaster = document.getElementById('price_master')

toggle.addEventListener('change',() => {
    if(toggle.checked === true) {
        priceBasic.innerHTML = '&dollar;199.99'
        pricePro.innerHTML = '&dollar;249.99'
        priceMaster.innerHTML = '&dollar;399.99'
    } else {
        priceBasic.innerHTML = '&dollar;19.99'
        pricePro.innerHTML = '&dollar;24.99'
        priceMaster.innerHTML = '&dollar;39.99'
    }
})