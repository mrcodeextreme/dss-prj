import { Component, OnInit } from '@angular/core';
import { Producto } from '../shared/producto.model';
import { PedidosService } from './pedidos.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  prodSeleccion: Producto;

  constructor(private pedidoServ: PedidosService) { }

  ngOnInit() {
    this.pedidoServ.prodSeleccion.subscribe(
      (producto: Producto) => {this.prodSeleccion = producto; }
  );
  }




}
