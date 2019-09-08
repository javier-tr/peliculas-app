import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peliculas/:category', component: HomeComponent },
  { path: 'mejores-peliculas/:year', component: HomeComponent },
  { path: 'buscador/:query', component: BuscadorComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
