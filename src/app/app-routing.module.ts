import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from "./components/partials/home/home.component";
import {ListaPersonaComponent} from "./components/partials/lista-persona/lista-persona.component";
import {RegistroPersonaComponent } from "./components/partials/registro-persona/registro-persona.component";


const routes: Routes = [
    { path:"registro-persona", component:RegistroPersonaComponent},
    { path:"listar", component:ListaPersonaComponent},
    { path:"home", component:HomeComponent},
    { path: "**", pathMatch:"full",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
