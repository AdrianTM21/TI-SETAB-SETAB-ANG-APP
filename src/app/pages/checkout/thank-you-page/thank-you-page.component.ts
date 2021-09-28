import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
  <h1 class="title">Gracias por su compra!</h1>
  <p class="content">Tu pedido esta en camino!</p>
  <span>
    Tenga en cuenta que su metodo de pago sera de contraentrega.
    No nos hacemos responsables en caso de que usted no cuente en el momento con el dinero para pagar,
    de ser asi el pedido sera cancelado y su direccion sera marcada como negativa por nuestra tienda.
  </span>
  </div>`,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent {
}
