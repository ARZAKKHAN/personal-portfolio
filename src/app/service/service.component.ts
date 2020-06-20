import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  public service;
  constructor(private serviceservice: ServiceService , private route: Router) { }

  ngOnInit(): void {
    this.serviceservice.getAllService().subscribe((a) => {
      this.service = a;
    });
  }

}
