import { Card } from "../components/card.js"
import { getPeliculasDeHoy } from "../services/peliculasServices.js";
import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { Error } from "../components/error.js";
import { TextoCartelera,TextoError } from "../components/texto.js";

const RenderNavbar = () =>{
    let _navbarDiv = document.getElementById("navigator");
    _navbarDiv.innerHTML+= Navbar();
}
const RenderFooter = () =>{
    let _footerDiv = document.getElementById("footer");
    _footerDiv.innerHTML+= Footer();
}
const RenderizarPeliculas = (json) =>{
    let _rootCards = document.getElementById("rootCards")
    let _rootError=document.getElementById("error")
    let _rootTexto=document.getElementById("texto")
    if (!json.status) {
        _rootTexto.innerHTML+=TextoCartelera();
        json.forEach(pelicula => {
            _rootCards.innerHTML+=Card(pelicula.poster,pelicula.titulo,pelicula.sinopsis,pelicula.peliculaId)
        });
    }
    else{
        _rootTexto.innerHTML+=TextoError();
        _rootError.innerHTML+=Error(json.status,json.message);
    }
    
}


export const CarteleraRender =() =>{
    RenderNavbar()
    RenderFooter()
    getPeliculasDeHoy(RenderizarPeliculas)
}