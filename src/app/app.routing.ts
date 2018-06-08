import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PlaneacionPedidosComponent } from './planeacion-pedidos/planeacion-pedidos.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'pedidos', component: PedidosComponent},
    {path: 'planeacion-pedidos', component: PlaneacionPedidosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
