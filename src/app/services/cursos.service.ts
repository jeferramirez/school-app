import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  URLAPI =`${environment.URLAPI}cursos`;
  constructor(private http: HttpClient) { }

  getAll () {
    return this.http.get<any []>(this.URLAPI);
  }

  create(colegio: any) {
    return this.http.post(this.URLAPI, colegio);
  }
}
