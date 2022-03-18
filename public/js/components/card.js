export const Card = (img, name, sinopsis, peliculaId) =>`
    <a href="../pelicula?peliId=${peliculaId}">
        <div class="card" id="cardPeli${peliculaId}" ">
            <div class="img1" style="background-image: url(${img})"></div>
            <div class="img2" style="background-image: url(${img})"></div>
            <div class="title">${name}</div>
            <div class="text">${sinopsis}</div>
        </div>
    </a>
`