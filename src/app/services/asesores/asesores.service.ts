import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsesoresService {

  private url = 'http://localhost:8080/asesores';

  constructor(
    private http: HttpClient,

  ) { }

  getAllAsesores(): Observable<any> {
    return this.http.get(this.url);
  }
}
