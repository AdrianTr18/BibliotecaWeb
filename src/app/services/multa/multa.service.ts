import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultaService {

  private url = 'http://localhost:8080/multa';

  constructor(
    private http: HttpClient

  ) { }

  getMultas(): Observable<any> {
    return this.http.get(this.url);
  }

  getMulta(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  addMulta(multa: any): Observable<any> {
    return this.http.post(this.url, multa);
  }
}
