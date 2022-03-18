export const Funcion =(peliculaId,funcionId,nombrePeli,fechaFuncion,horarioFuncion) =>`
    <div class="container-fluid">
        <div class="row mt-5 mb-4">
            <div id="nombre-pelicula"class="col-md-3 d-flex align-items-center justify-content-center">
            <h3>${nombrePeli}</h3>
            </div>
            <div id="fecha-funcion" class="col-md-3 d-flex align-items-center justify-content-center">
            <h3>${fechaFuncion}</h3>
            </div>
            <div id="horario-funcion" class="col-md-3 d-flex align-items-center justify-content-center">
            <h3>${horarioFuncion}</h3>
            </div>
            <div id="boton-comprar-entradas"class="col-md-3 d-flex text-center align-items-center justify-content-center pl-5">
            <a id="boton-comprar" href="../tickets?peliculaId=${peliculaId}&funcionId=${funcionId}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Reservar asientos
            </a>
        </div>
    </div>
`
export const FuncionInit =()=>`
    <div class="row mt-2 ">
        <div class="col-md-3 d-flex align-items-center justify-content-center mt-2 mb-1">
            <p class="fw-bold h3 text-light">Pelicula</p>
        </div>
        <div class="col-md-3 d-flex align-items-center justify-content-center mt-2 mb-1">
            <p class="fw-bold h3 text-light">Fecha</p>
        </div>
        <div class="col-md-3 d-flex align-items-center justify-content-center mt-2 mb-1">
            <p class="fw-bold h3 text-light">Horario</p>
        </div>
            <div class="col-md-3 d-flex align-items-center justify-content-center mt-2 mb-1">
        </div>
    </div>
`