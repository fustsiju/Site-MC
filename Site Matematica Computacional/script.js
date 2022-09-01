var mant = document.querySelector('#mant')
var upper = document.querySelector('#upper')
var bin = document.querySelector('#bin')
var lower = document.querySelector('#lower')
var resultado = document.querySelector('span')

function calcular(){
    resultado.innerHTML = parseInt(bin.value.toString(2));
}

