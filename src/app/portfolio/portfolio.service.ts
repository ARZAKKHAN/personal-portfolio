import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient , private route: Router) { }
  public getAllPortfolio(): Observable<any> {
    // tslint:disable-next-line:no-string-literal
    return this.http.get('../assets/portfolio-data.json').pipe( map (x => x['portfolio']));
  }
  public getAllPortfoliotById(id): Observable<any>{
    return this.http.get('../assets/portfolio-data.json').pipe( map (m => {
      // tslint:disable-next-line:no-string-literal
      const c = m['portfolio'].filter( (x) => ['id'] === id );
    }));
  }
}
