import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  URLAPI =`${environment.URLAPI}estudiantes`;
  constructor(private http: HttpClient) { }

  getAll () {
    return this.http.get<any []>(this.URLAPI);
  }

  create(estudiante: any) {
    return this.http.post(this.URLAPI, estudiante);
  }
}
