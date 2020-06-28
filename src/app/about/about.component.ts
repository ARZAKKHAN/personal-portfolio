import { Router } from '@angular/router';
import { AboutService } from './about.service';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public abouts;
  public fields;
  public secondfield;
  public experiences;
  public skills;
  public education;
  public ego;
  constructor(private aboutservice: AboutService, private router: Router) { }

  ngOnInit(): void {
    this.aboutservice.getAllAbout().subscribe(({PersonalInfo}) => {
      const {fields, title, secondfields, experience, skills, educations, egos} = PersonalInfo;
      // this.abouts = about;
      this.fields = fields;
      this.secondfield = secondfields;
      this.experiences = experience;
      this.skills = skills;
      this.education = educations;
      this.ego = egos;
      console.log(fields);
    });
  }

}
