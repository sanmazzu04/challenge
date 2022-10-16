let primernumero = " "
let segundonumero = " "
let palabra = " "

document.getElementById("numero1").addEventListener('keyup', function usuario (e){
    document.getElementById("numero1");
    primernumero = e.target.value;
    console.log(primernumero);
})

document.getElementById("numero2").addEventListener('keyup', function usuario (e){
    document.getElementById("numero2");
    segundonumero = e.target.value;
    console.log(segundonumero);
})

document.getElementById("texto").addEventListener('keyup', function usuario (e){
    document.getElementById("texto");
    palabra = e.target.value;
    console.log(palabra);
})

document.getElementById("boton").addEventListener('click', function devolver(){

if (primernumero == segundonumero){
    document.getElementById("lugar").textContent = palabra.charAt(0) + palabra.charAt(palabra.length - 1);
}

else if (primernumero > segundonumero){
    document.getElementById("lugar").textContent = primernumero;
}

else if(primernumero < segundonumero){
    document.getElementById("lugar").textContent = segundonumero;
}

})