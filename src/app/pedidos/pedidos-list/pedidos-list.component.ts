import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../shared/producto.model';
import { PedidosService } from '../pedidos.service';


@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  productos: Producto[];

  constructor(private pedidoServ: PedidosService) { }

  ngOnInit() {
    this.productos = this.pedidoServ.getProds();
  }

}
