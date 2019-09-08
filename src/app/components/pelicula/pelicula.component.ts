import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../models/movie.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  movieId: number;
  movie: Movie;
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  trailer: string;

  constructor(
    private route: ActivatedRoute,
    private _movieService: PeliculasService,
    private _location: Location,
  ) {
    this.route.params.subscribe(params => {
      this.movieId = params.id;
      _movieService.getMovie(this.movieId)
      .subscribe(movie => {
        this.movie = new Movie(movie);
      }, err => {
        console.log(err);
      });
    });
  }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  getTrailer(movie: Movie) {
    this._movieService.getMovieVideos(movie.id)
    .subscribe(videos => {
      console.log(videos);
    }, err => console.log(err));
  }
}
