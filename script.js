//DESESTRUCTURAR
import {barcelona, roma, paris, londres} from "./ciudades.js"

//Obtener los elementos del DOM-DOCUMENT OBJECT MODEL, es una representación estructurada de HTML.
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//Agregar un evento click a cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //REMOVER ACTIVO-Remover la clase "active" de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //AGREGAR ACTIVE AL QUE CORRESPONDA
        this.classList.add('active')

        //TRAER LA INFORMACIÓN DEL OBJETO CORRESPONDIENTE A LA ELECCIÓN, según el enlace
        let contenido = obtenerContenido(this.textContent)

        //MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    })

});

//FUNCION PARA TRAER LA INFORMACIÓN CORRECTA DESDE ciudades,js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace];
}