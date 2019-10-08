import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/partials/home/home.component';
import { ListaPersonaComponent } from './components/partials/lista-persona/lista-persona.component';
import { FormularioPersonaComponent } from './components/partials/formulario-persona/formulario-persona.component';
import { RegistroPersonaComponent } from './components/partials/registro-persona/registro-persona.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListaPersonaComponent,
    FormularioPersonaComponent,
    RegistroPersonaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
