import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PlaneacionPedidosComponent } from './planeacion-pedidos/planeacion-pedidos.component';
import { HomeComponent } from './home/home.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ContratosComponent } from './contratos/contratos.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pedidos', component: PedidosComponent},
    {path: 'planeacion-pedidos', component: PlaneacionPedidosComponent},
    {path: 'proveedores', component: ProveedoresComponent},
    {path: 'contratos', component: ContratosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
