export const TicketsInit = (usuario) =>`
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center mb-3">
            <p class="text-success h1"> Muchas gracias por su reserva. Se han generado los siguientes tickets:</p>
        </div>
    </div>
    <div class="row">
		<div class="col-md-12 d-flex justify-content-center mb-3">
            <p class="fw-bold h2">USUARIO:</p><p class=" h2"> ${usuario}</p>
		</div>
	</div>
    <div class="row">
		<div class="col-md-12 d-flex justify-content-center">
            <p class="fw-bold h2">N° de Ticket:</p>
		</div>
	</div>
`

export const Ticket = (ticketId) =>`
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
            <h3>${ticketId}</h3>
        </div>
    </div>
`