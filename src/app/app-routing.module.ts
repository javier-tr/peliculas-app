import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peliculas/:category', component: HomeComponent },
  { path: 'mejores-peliculas/:year', component: HomeComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
