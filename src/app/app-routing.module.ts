import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from "./components/partials/home/home.component";

const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path: "**", pathMatch:"full",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
