import { Navbar } from "../components/navbar.js";
import { getPeliculaById } from "../services/peliculasServices.js";
import { Movie } from "../components/movie.js";
import { Footer } from "../components/footer.js";

const RenderNavbar = () =>{
    let _navbarDiv = document.getElementById("navigator");
    _navbarDiv.innerHTML+= Navbar();
}
const RenderFooter = () =>{
    let _footerDiv = document.getElementById("footer");
    _footerDiv.innerHTML+= Footer();
}

const RenderMovie =(json) =>{
    let _rootMovie = document.getElementById("pelicula-main")
    _rootMovie.innerHTML+=Movie(json.titulo,json.poster,json.sinopsis,json.trailer)
}
export const PeliculaRender = (id) =>{
    RenderNavbar();
    RenderFooter();
    getPeliculaById(id,RenderMovie)
}