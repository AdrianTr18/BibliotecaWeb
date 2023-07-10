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
