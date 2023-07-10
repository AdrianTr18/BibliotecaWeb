import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url = 'http://localhost:8080/libros';

  constructor(
    private http: HttpClient

  ) { }

    //Métodos para el servidor
    public getLibros(): Observable<any> {
      return this.http.get(this.url);
    }

    public getLibro(id: number): Observable<any> {
      return this.http.get(this.url + '/' + id);
    }

    public createLibro(libro: any): Observable<any> {
      return this.http.post(this.url, libro);
    }

    public updateLibro(libro: any): Observable<any> {
      return this.http.put(this.url + '/' + libro.id, libro);
    }

    // public deleteLibro(id: number): Observable<any> {
    //   return this.http.delete(this.url + '/' + id);
    // }

    // public getLibroByTitulo(titulo: string): Observable<any> {
    //   return this.http.get(this.url + '/titulo/' + titulo);
    // }

    // public getLibroByAutor(autor: string): Observable<any> {
    //   return this.http.get(this.url + '/autor/' + autor);
    // }

    // public getLibroByEditorial(editorial: string): Observable<any> {
    //   return this.http.get(this.url + '/editorial/' + editorial);
    // }
}
