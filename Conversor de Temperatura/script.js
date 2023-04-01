let celciusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let rankineInput = document.querySelector('#rankine > input')

function arredondar(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15
    let rTemp = (cTemp*(9/5))+491.67

    fahrenheitInput.value = arredondar(fTemp)
    kelvinInput.value = arredondar(kTemp)
    rankineInput.value = arredondar(rTemp)
})
