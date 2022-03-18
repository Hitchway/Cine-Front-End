import { Navbar } from "../components/navbar.js";
import { Card } from "../components/card.js"
import { getPeliculas } from "../services/peliculasServices.js";
import { Footer } from "../components/footer.js";
import { Carousel } from "../components/carousel.js";

const RenderNavbar = () =>{
    let _navbarDiv = document.getElementById("navigator");
    _navbarDiv.innerHTML+= Navbar();
}

const RenderCarousel =() =>{
    let _carouselDiv = document.getElementById("carousel-propaganda");
    _carouselDiv.innerHTML+=Carousel();
}

const RenderCard = (json) =>{
    let _root = document.getElementById("rootCards");
    json.forEach(pelicula => {
        _root.innerHTML += Card(pelicula.poster,pelicula.titulo,pelicula.sinopsis,pelicula.peliculaId)
    })
}

const RenderFooter = () =>{
    let _footerDiv = document.getElementById("footer");
    _footerDiv.innerHTML+= Footer();
}

export const IndexRender = () =>{
    getPeliculas(RenderCard);
    RenderNavbar();
    RenderFooter();
    RenderCarousel();
}