import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { postTickets } from "../services/ticketServices.js";
import { MovieForTicket } from "../components/movieTickets.js";
import { getPeliculaById } from "../services/peliculasServices.js";
import { FunctionTickets } from "../components/funtionTickets.js";
import { getFuncionById } from "../services/funcionesService.js";
import { Inputs } from "../components/inputs.js";
import { ErrorTickets } from "../components/error.js";
import { TicketsInit } from "../components/tickets.js";
import { Ticket } from "../components/tickets.js";
import { TextoGuardarTickets } from "../components/texto.js";

const RenderNavbar = () =>{
    let _navbarDiv = document.getElementById("navigator");
    _navbarDiv.innerHTML+= Navbar();
}
const RenderFooter = () =>{
    let _footerDiv = document.getElementById("footer");
    _footerDiv.innerHTML+= Footer();
}
const RenderPeliculaInfo =(json) =>{
    let _filmRoot = document.getElementById("pelicula-tickets")
    _filmRoot.innerHTML+=MovieForTicket(json.poster,json.titulo,json.sinopsis)
}
const RenderFuncion=(json) =>{
    let _funcRoot = document.getElementById("funcion-tickets")
    _funcRoot.innerHTML+=FunctionTickets(json.fecha,json.horario)
}
const RenderInputs=()=>{
    let _inputRoot = document.getElementById("seccion-ingreso-datos")
    _inputRoot.innerHTML+=Inputs();
}

const RenderTicketsGenerados=(json)=>{
    let _rootMain=document.getElementById("contenedor")
    _rootMain.innerHTML=""
    if (json.status && json.message) {
        _rootMain.innerHTML+=ErrorTickets(json.status,json.message)
    }
    else{
        _rootMain.innerHTML+=TicketsInit(json[0].usuario);
        json.forEach(ticket => {
            _rootMain.innerHTML+=Ticket(ticket.ticketId,ticket.usuario,ticket.funcionId)
        });
        _rootMain.innerHTML+=TextoGuardarTickets()
    };
}

export const TicketsRender = (peliculaId,funcionId) =>{
    RenderNavbar();
    RenderFooter();
    RenderInputs();
    getPeliculaById(peliculaId,RenderPeliculaInfo)
    getFuncionById(funcionId,RenderFuncion)
    
}
export const GenerarTickets =(usuario,cantidad,funcionId)=>{
    postTickets(funcionId,usuario,cantidad,RenderTicketsGenerados)
}