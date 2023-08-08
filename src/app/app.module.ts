import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IntroComponent } from './intro/intro.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PieComponent } from './pie/pie.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    IntroComponent,
    NosotrosComponent,
    ServiciosComponent,
    EquipoComponent,
    ContactoComponent,
    PieComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
