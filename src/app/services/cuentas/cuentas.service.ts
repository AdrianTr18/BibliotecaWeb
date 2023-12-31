import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private apiUrl = 'http://localhost:8080/';

  constructor(
    private http: HttpClient

  ) { }

  public getAllCuentass(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public getCuentas(correo: string): Observable<any> {
      return this.http.get(this.apiUrl + correo);
    }
}
