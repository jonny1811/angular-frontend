import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html'
})
export class TechnologyCardComponent implements OnInit {
  @Input() technology: any = {};

  ngOnInit(): void {
    // Comment so as not to be empty
  }

}
