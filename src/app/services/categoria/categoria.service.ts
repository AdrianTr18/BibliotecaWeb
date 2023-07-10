import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8080/categoriaLCs';

  constructor(
    private http: HttpClient

  ) { }

  public getCategorias(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  public addCategoria(categoria: any): Observable<any>{
    return this.http.post(this.apiUrl, categoria);
  }
}
