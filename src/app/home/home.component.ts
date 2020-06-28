import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, public r: Renderer2) {
    r.addClass(document.body, 'white-background');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.r.removeClass(document.body, 'white-background');
  }
}
