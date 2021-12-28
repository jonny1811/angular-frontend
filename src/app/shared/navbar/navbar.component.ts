import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void {
    // Comment so as not to be empty
  }

  searchTechnology(query: string) {
    this._router.navigate(['/search', query]);
  }

}
