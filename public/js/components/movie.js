export const InitSelects =() =>`
    <div class="movie-selection">
        <select id="movie-select">
            <option selected>Película</option>
        </select>
    </div>
`
export const SelectsMovies = (nombrepeli)  =>`
    <div class="movie-selection">
        <select id="movie-select">
            <option value="${nombrepeli}">${nombrepeli}</option>
        </select>
    </div>
`


export const Movie =(titulo,imagen,sinopsis,trailer)=>`
    <div class="row">
		<div class="border-end col-md-4">
            <div class="row">
				<div class="movie-image col-md-12 ">
                    <img src="${imagen}" class="poster-imagen" alt="">
				</div>
			</div>
			<div class="row">
				<div class="movie-title col-md-12 text-center">
                    <h1>${titulo}</h1>
				</div>
			</div>
		</div>
		<div class="col-md-8">
            <div class="row">
				<div class="movie-sinopsis col-md-12 mt-4">
                    <h2> SINOPSIS</h2> 
                    <h3>${sinopsis}</h3>
				</div>
			</div>
			<div class="row">
                <div class="trailer-texto col-md-12 text-center">
				</div>
				<div class="movie-video col-md-12 text-center">
                    <iframe class="video" src="${trailer}"></iframe>
				</div>
			</div>
		</div>
	</div>
    <div class="row mt-5">
        <div id = "seccion-boton"class="col-md-12 mt-5 d-flex align-items-center justify-content-center"> <!--Boton reserva-->
            <a id="boton-verde" href="../funciones" class="boton-verde">Buscar Funciones 🔎</a>
        </div>
    </div>
`





export const AddOptions = (name) => {
    let op = document.createElement("option");
    op.value = name;
    op.innerHTML = name;
    return op;
}