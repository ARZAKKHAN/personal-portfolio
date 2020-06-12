import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient , private route: Router) { }
  public getAllAbout(): Observable<any> {
    // tslint:disable-next-line:no-string-literal
    return this.http.get('../assets/about-data.json').pipe( map (x => x['about']));
  }
  public getAllAboutById(id): Observable<any>{
    return this.http.get('../assets/about-data.json').pipe( map (m => {
      // tslint:disable-next-line:no-string-literal
      const c = m['about'].filter( (x) => ['id'] === id );
    }));
  }
}
