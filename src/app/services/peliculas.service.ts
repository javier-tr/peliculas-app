import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = 'e63cd344cba788cb0f38206562ccbc88';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(
    private jsonp: HttpClientJsonpModule,
    private http: HttpClient
  ) { }

  getPopulars() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getKids() {
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getMovie(id: number) {
    const url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getInTheaters() {
    const currentDate = new Date();
    const to = currentDate.toISOString().slice(0, 10);
    const from = this.decreaseOneMonthOneWeek(currentDate).toISOString().slice(0, 10);
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${from}&primary_release_date.lte=${to}&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getMovieVideos(id) {
    const url = `${this.urlMoviedb}/movie/${id}/videos?api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getBest(year: number) {
    const url = `${this.urlMoviedb}/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  search(query: string) {
    const url = `${this.urlMoviedb}/search/movie?query=${query}&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  private decreaseOneMonthOneWeek(date: Date): Date {
    const newDateMonth = new Date(date.setMonth(date.getMonth() - 1));
    const finalDate = new Date(newDateMonth.setDate(date.getDate() - 7));
    return finalDate;
  }
}
