export class Movie {
  id: number;
  title: string;
  overview: string;
  original_title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  release_date: string;
  poster_path: string;
  genres: any[];
  production_companies: any[];
  video: boolean;
  show_stats: boolean = false;

  constructor(data: any) {
    return Object.assign(this, data);
  }
}
