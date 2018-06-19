
import { Producto } from '../shared/producto.model';
import { EventEmitter } from '@angular/core';

export class PedidosService {

    prodSeleccion = new EventEmitter<Producto>();

    private productos: Producto[] = [
        new Producto('Silla Lujo', 10, 'https://upload.wikimedia.org/wikipedia/commons/5/59/Utility_chair_in_laminated_wood_1950-52.JPG'),
        new Producto('Mesa Lujo', 20, 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Antique_Belgian_table_%2826408462581%29.jpg')
        ];
         // Guardara un array de objetos del modelo Recipe


         getProds() {
            return this.productos.slice();
         }

}
