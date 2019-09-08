import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  category: string = null;

  constructor(
    private route: ActivatedRoute,
    public _movieService: PeliculasService,
  ) {
    this.route.params.subscribe(params => {
      this.category = params.category;
      console.log(this.category);
      switch (this.category) {
        case 'POPULAR':
          this.getPopulars();
          break;
        case 'KIDS':
          this.getKids();
          break;
        case 'IN-THEATERS':
          this.getInTheaters();
          break;
        default:
          this.getPopulars();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  getPopulars() {
    this._movieService.getPopulars()
    .subscribe((response: any) => {
      this.movies = response.results.map(m => new Movie(m));
    }, err => {
      console.log(err);
    });
  }

  getKids() {
    this._movieService.getKids()
    .subscribe((response: any) => {
      this.movies = response.results.map(m => new Movie(m));
    }, err => {
      console.log(err);
    });
  }

  getInTheaters() {
    this._movieService.getInTheaters()
    .subscribe((response: any) => {
      this.movies = response.results.map(m => new Movie(m));
    }, err => {
      console.log(err);
    });
  }
}
