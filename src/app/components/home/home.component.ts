import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  category: string = null;
  years: number[] = [];
  selectedYear: string = null;
  best = 0;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _movieService: PeliculasService,
  ) {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.category = params.category;
      this.selectedYear = params.year;
      if (this.category) {
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
      } else if (this.selectedYear) {
        this.getBest(this.selectedYear);
      } else {
        this.getPopulars();
      }
    });
  }

  ngOnInit() {
    this.setYears();
  }

  getPopulars() {
    this._movieService.getPopulars()
    .subscribe((response: any) => {
      this.movies = response.results.map(m => new Movie(m));
      this.isLoading = false;
    }, err => {
      console.log(err);
    });
  }

  getKids() {
    this._movieService.getKids()
    .subscribe((response: any) => {
      this.movies = response.results.map(m => new Movie(m));
      this.isLoading = false;
    }, err => {
      console.log(err);
    });
  }

  getInTheaters() {
    this._movieService.getInTheaters()
    .subscribe((response: any) => {
      this.movies = response.results.map(m => new Movie(m));
      this.isLoading = false;
    }, err => {
      console.log(err);
    });
  }

  getBest(year: string | number) {
    this._movieService.getBest(+year)
      .subscribe((response: any) => {
        this.movies = response.results.map(m => new Movie(m));
        this.isLoading = false;
      }, err => {
        console.log(err);
      });
  }

  goToBest() {
    if (this.best > 0) {
      this.router.navigate(['/mejores-peliculas', this.best]);
    }
  }

  setYears() {
    const currentYear = new Date().getFullYear();
    let i = currentYear;
    const end = currentYear - 5;
    for (i; i > end; i -= 1) {
      this.years.push(i);
    }
  }
}
