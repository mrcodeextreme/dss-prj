import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../shared/producto.model';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-pedidos-detail',
  templateUrl: './pedidos-detail.component.html',
  styleUrls: ['./pedidos-detail.component.css']
})
export class PedidosDetailComponent implements OnInit {

  @Input() producto: Producto;

  constructor(private pedidoServ: PedidosService) { }

  ngOnInit() {
     // this.producto = this.pedidoServ.getProds();
  }


  onAddToLista() {
    // this.pedidoServ.addIngredientsToLista(this.recipe.ingredients);
  }

}
