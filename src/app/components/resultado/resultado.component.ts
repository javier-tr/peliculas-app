import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  @Input() movies: Movie[] = [];

  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
  }

  hoverItem(movie: Movie) {
    movie.show_stats = !movie.show_stats;
  }

  movieDetails(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);
  }
}
