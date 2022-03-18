export const Navbar = (img, name, sinopsis, peliculaId) =>`
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bgcolor" id="navegador">
        <div class="container-fluid">
            <a class="navbar-brand " href="../../"><img src="../img/logo.png" class="logo-empresa" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="botonToggle">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../">INICIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href="../cartelera">CARTELERA DE HOY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link "  href="../funciones">FUNCIONES</a>
                    </li>
                </ul>
            </div>
            <div id = "margen-barra" class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </div>
    </nav>`