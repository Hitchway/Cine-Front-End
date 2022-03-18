export const MovieForTicket = (img, name, sinopsis) =>`
    <div id="columna-titulo" class="row">
        <div class="col-md-12 " ><!--titulo pelicula-->
            <h1>${name}</h1>
        </div>
    </div>
    <div class="row">
        <div id="columna-poster" class="col-md-6"> <!--poster pelicula-->
            <img src="${img}" >
        </div>
        <div id="columna-sinopsis" class="col-md-6 border-right"> <!--sinopsis pelicula-->
            <h2>${sinopsis}</h2>
        </div>
    </div>
`