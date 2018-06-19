import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../shared/producto.model';
import { PedidosService } from '../../pedidos.service';

@Component({
  selector: 'app-pedidos-item',
  templateUrl: './pedidos-item.component.html',
  styleUrls: ['./pedidos-item.component.css']
})
export class PedidosItemComponent {

  @Input() producto: Producto;

  constructor(private pedidoServ: PedidosService) { }


  onSelected() {
   this.pedidoServ.prodSeleccion.emit(this.producto);
   }
}
