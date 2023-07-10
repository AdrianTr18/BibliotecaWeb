import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaLCService {

  private url = 'http://localhost:8080/subcategoriaLCs';

  constructor(
    private http: HttpClient

  ) { }

    getSubcategoria(): Observable<any>{
      return this.http.get(this.url);
    }


}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaLCService {

  private url = 'http://localhost:8080/subcategoriaLCs';

  constructor(
    private http: HttpClient

  ) { }

  getSubcategoriaLCs(): Observable<any> {
    return this.http.get(this.url);
  }

  addSubcategoriaLC(subcategoriaLC: any): Observable<any> {
    return this.http.post(this.url, subcategoriaLC);
  }
}
