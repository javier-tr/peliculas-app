import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  movies: Movie[] = [];
  query: string;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _movieService: PeliculasService,
    ) {
      this.route.params.subscribe(params => {
        this.query = params.query;
        this.searchMovies();
      });
    }

  ngOnInit() {
    this.isLoading = true;
  }

  searchMovies() {
    if (this.query !== '' && this.query !== undefined) {
      this._movieService.search(this.query)
      .subscribe((response: any) => {
        this.movies = response.results.map(m => new Movie(m));
        this.isLoading = false;
      }, err => {
        console.log(err);
      });
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
