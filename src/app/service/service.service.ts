import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient , private route: Router) { }

  public getAllService(): Observable<any> {
    // tslint:disable-next-line:no-string-literal
    return this.http.get('../assets/service-data.json').pipe( map (x => x['service']));
  }
  public getAllServiceById(id): Observable<any>{
    return this.http.get('../assets/service-data.json').pipe( map (m => {
      // tslint:disable-next-line:no-string-literal
      const c = m['service'].filter( (x) => ['id'] === id );
    }));
  }

}
