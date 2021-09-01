import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AltaComponent } from './components/alta/alta.component';
//import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { EditComponent } from './components/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'
import {MatInputModule} from '@angular/material/input';
//import { ProveedorComponent } from './components/proveedor/proveedor.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MenuizqComponent } from './components/menuizq/menuizq.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { EditProveedor } from './proveedor/edita/edita.component';
import { AltaProveedor } from './proveedor/alta/alta.component';
import { ListaProveedor } from './proveedor/lista/lista.component';
import { AltaInventario } from './inventario/alta/alta.component';
import { EditInventario } from './inventario/edita/edita.component';
import { ListaInventario } from './inventario/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    //AltaComponent,
    //ListaComponent,
    LoginComponent,
    //EditComponent,
   // ProveedorComponent,
    MenuizqComponent,
    NavMenuComponent,
    EditProveedor,
    AltaProveedor,
    ListaProveedor,
    EditInventario,
    ListaInventario,
    AltaInventario,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
