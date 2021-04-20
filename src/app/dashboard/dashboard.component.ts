import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'app/services/asignatura.service';
import { ColegioService } from 'app/services/colegio.service';
import { CursosService } from 'app/services/cursos.service';
import { EstudiantesService } from 'app/services/estudiantes.service';
import { ProfesorService } from 'app/services/profesor.service';
import * as Chartist from 'chartist';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  colegios = [];
  cursos= [];
  profesores = [];
  asignaturas = [];
  estudiantes = [];
  constructor( private colegioSrv: ColegioService, private cursosSrv: CursosService, private estudianteSrv: EstudiantesService,
               private profesoresSrv: ProfesorService, private asignaturaSrv: AsignaturaService) { }


  ngOnInit() {
    this.loadDataWidgets();
  }

  loadDataWidgets() {
    forkJoin( [
      this.colegioSrv.getAll(),
      this.cursosSrv.getAll(),
      this.profesoresSrv.getAll(),
      this.asignaturaSrv.getAll(),
      this.estudianteSrv.getAll()
    ]).subscribe( ([colegios, cursos, profesores, asignaturas, estudiantes]) => {
      this.colegios = colegios.length > 0 ? colegios : [];
      this.cursos = cursos.length > 0 ? cursos : [];
      this.profesores = profesores.length > 0 ? profesores : [];
      this.asignaturas = asignaturas.length > 0 ? asignaturas : [];
      this.estudiantes = estudiantes.length > 0 ? estudiantes : [];
    });
  }

}
