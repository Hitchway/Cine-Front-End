import {GenerarTickets} from '../container/tickets.js'
document.getElementById("boton-verde").addEventListener("click", comprarTickets);
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var funcionId = urlParams.get('funcionId');

function comprarTickets() {
    let usuario=document.getElementById("input-usuario").value
    let cantidad=document.getElementById("input-cantidad").value
    if (usuario!="" && cantidad!="") {
        GenerarTickets(usuario,cantidad,funcionId)
    }
    else{
        alert('Debe ingresar su usuario y la cantidad de tickets que desea comprar')
    }
}