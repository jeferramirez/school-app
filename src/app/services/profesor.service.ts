import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  URLAPI =`${environment.URLAPI}profesores`;
  constructor(private http: HttpClient) { }

  getAll () {
    return this.http.get<any []>(this.URLAPI);
  }

  create(asignatura: any) {
    return this.http.post(this.URLAPI, asignatura);
  }
}
