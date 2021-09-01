import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaInventario } from './inventario/alta/alta.component'
import { ListaInventario } from './inventario/lista/lista.component'
import { EditInventario } from './inventario/edita/edita.component'

import { AltaProveedor } from './proveedor/alta/alta.component'
import { ListaProveedor } from './proveedor/lista/lista.component'
import { EditProveedor } from './proveedor/edita/edita.component'

const routes: Routes = [
  //{ path: 'listas', loadChildren: () => import('./listas/listas.module').then(m => m.ListasModule) },
  { path: 'alta-inventario', component:AltaInventario},
  { path: 'lista-inventario', component:ListaInventario},
  { path: 'edita-inventario', component:EditInventario},
  { path: 'lista-proveedor', component:ListaProveedor},
  { path: 'alta-proveedor', component:AltaProveedor},
  { path: 'edita-proveedor', component:EditProveedor},
  { path: '', redirectTo:'/lista-inventario', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
