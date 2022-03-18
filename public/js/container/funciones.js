import { Navbar } from "../components/navbar.js";
import { InitSelects } from "../components/movie.js";
import { getPeliculas } from "../services/peliculasServices.js";
import { DatePicker } from "../components/datepicker.js";
import { AddOptions } from "../components/movie.js";
import { Footer } from "../components/footer.js";
import { getFunciones } from "../services/funcionesService.js";
import { Funcion,FuncionInit } from "../components/funcion.js";
import { Error } from "../components/error.js";
import { getFuncionesConPelicula } from "../services/funcionesService.js";

const RenderNavbar = () =>{
    let _navbarDiv = document.getElementById("navigator");
    _navbarDiv.innerHTML+= Navbar();
}
const RenderFooter = () =>{
    let _footerDiv = document.getElementById("footer");
    _footerDiv.innerHTML+= Footer();
}
const RenderDatePicker = () =>{
    let _root = document.getElementById("seccion-datepicker");
    _root.innerHTML+= DatePicker();
}

const RenderSelectPeliculas =(json) =>{
    let _root = document.getElementById("movie-selection");
    _root.innerHTML += InitSelects();
    let _rootmovies =document.getElementById("movie-select")
    json.forEach(pelicula => {
        _rootmovies.appendChild(AddOptions(pelicula.titulo))
     });
}


const RenderizadoDeFuncionesConTitulo =(json) =>{
    let _root = document.getElementById("resultado-busqueda")
    json.forEach(funcion => {
        _root.innerHTML+=Funcion(funcion.peliculaId,funcion.funcionId,funcion.titulo,funcion.fecha,funcion.horario)
    });
}

const FuncionesRender =(json)=>{
    let _root = document.getElementById("resultado-busqueda")
    let _rootError = document.getElementById("resultado-error")
    _rootError.innerHTML = "";
    _root.innerHTML = "";

    if (json.status){
        _rootError.innerHTML+= Error(json.status,json.message)
    }
    else{
        _root.innerHTML+=FuncionInit();
        getFuncionesConPelicula(json,RenderizadoDeFuncionesConTitulo)
    }
}

export const SeleccionesRender = () =>{
    getPeliculas(RenderSelectPeliculas)
    RenderNavbar();
    RenderFooter();
    RenderDatePicker();
}

export const RenderizarFunciones =(fecha,titulo) =>{
    getFunciones(fecha,titulo,FuncionesRender)
}
