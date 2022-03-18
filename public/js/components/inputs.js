export const Inputs = () =>`
    <div class="col-md-6 d-flex align-items-center justify-content-center mt-5 mb-5"> <!--usuario-->
        <div class="seccion-input">
            <div class="demo-flex-spacer"></div>
            <div class="webflow-style-input">
                <input id="input-usuario" class="input-colors" type="text" placeholder="Usuario" maxlength="20"></input>
            </div>
            <div class="demo-flex-spacer"></div>
        </div>
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-center mt-5 mb-5"> <!--cantidad de tickets-->
            <div class="seccion-input">
                <div class="demo-flex-spacer"></div>
                <div class="webflow-style-input">
                    <input id="input-cantidad"class="input-colors" type="number" placeholder="Cantidad de entradas" min="1" ></input>
                </div>
            <div class="demo-flex-spacer"></div>
        </div>
    </div>
`