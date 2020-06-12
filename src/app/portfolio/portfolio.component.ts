import { Router } from '@angular/router';
import { PortfolioService } from './portfolio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public portfolio;
  constructor(private portfolioservice: PortfolioService, private route: Router) { }

  ngOnInit(): void {
    this.portfolioservice.getAllPortfolio().subscribe((a) => {
      this.portfolio = a;
    });
  }

}
