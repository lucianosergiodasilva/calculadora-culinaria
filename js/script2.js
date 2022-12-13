/* Aula 19 de JS Conversor de Temperaturas */

// input range
let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')
let kelvin = document.querySelector('#kelvin')

// input number
let numeroC = document.querySelector('#numeroC')
let numeroF = document.querySelector('#numeroF')
let numeroK = document.querySelector('#numeroK')
let numeroG = document.querySelector('#numeroG')
let numeroH = document.querySelector('#numeroH')
let min = document.querySelector('#min')
let max = document.querySelector('#max')

// O input recebe o valor do slider
numeroC.value = celsius.value
// numeroF.value = fahrenheit.value
// numeroK.value = kelvin.value

// Altera os valores quando mechemos no celsius

function atualizaC() {
    numeroC.value = celsius.value
}

function atualizaF() {
    numeroF.value = parseFloat(numeroC.value) * 16
}

function atualizaK() {
    numeroK.value = parseFloat(numeroC.value) * 240
}

function atualizaG() {
    numeroG.value = parseFloat(numeroC.value) * 120
}

function atualizaH() {
    numeroH.value = parseFloat(numeroC.value) * 48
}

function calculos(){
    numeroF.value = parseFloat(numeroC.value) * 16
    numeroK.value = parseFloat(numeroC.value) * 240
    numeroG.value = parseFloat(numeroC.value) * 120
    numeroH.value = parseFloat(numeroC.value) * 48
}

// Botões de - e +

max.addEventListener('click', function(){
    if(numeroC.value < 10){
        numeroC.value = parseFloat(numeroC.value) + 0.25
        celsius.value = numeroC.value
    
        calculos()
        
        min.style.cursor = 'pointer'
        min.style.color = 'black'

        console.log('aumentando...')
    }
    else{
        max.style.cursor = 'not-allowed'
        max.style.color = '#edebeb'
        console.log('valor ultrapassou!')
    }

})

min.addEventListener('click', function(){
    if(numeroC.value > 0.25){
        numeroC.value = parseFloat(numeroC.value) - 0.25
        celsius.value = numeroC.value
    
        calculos()
    
        max.style.cursor = 'pointer'
        max.style.color = 'black'

        console.log('diminuindo...')
    }
    else{
        min.style.cursor = 'not-allowed'
        min.style.color = '#edebeb'
        console.log('valor ultrapassou!')
    }
})
