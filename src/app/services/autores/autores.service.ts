import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private apiUrl = 'http://localhost:8080/autores';

  constructor(
    private http: HttpClient

  ) { }

  public getAllAutores(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
