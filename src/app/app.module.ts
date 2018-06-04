import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PlaneacionPedidosComponent } from './planeacion-pedidos/planeacion-pedidos.component';
import { HomeComponent } from './home/home.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';
import { PedidosItemComponent } from './pedidos/pedidos-list//pedidos-item/pedidos-item.component';
import { PedidosDetailComponent } from './pedidos/pedidos-detail/pedidos-detail.component';
import { PedidosService } from './pedidos/pedidos.service';

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'planeacion-pedidos', component: PlaneacionPedidosComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PedidosComponent,
    PlaneacionPedidosComponent,
    HomeComponent,
    PedidosListComponent,
    PedidosItemComponent,
    PedidosDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
