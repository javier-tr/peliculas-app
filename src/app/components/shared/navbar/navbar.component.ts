import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  term: any;
  showAlert = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.term === '' || this.term === undefined) {
      this.showAlert = true;
    } else {
      const query = encodeURIComponent(this.term);
      this.showAlert = false;
      this.router.navigate(['/buscador', query]);
    }
  }

}
