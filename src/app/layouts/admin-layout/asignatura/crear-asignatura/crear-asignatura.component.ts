import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignaturaService } from 'app/services/asignatura.service';
import { CursosService } from 'app/services/cursos.service';
import { ProfesorService } from 'app/services/profesor.service';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent implements OnInit {
  
  asignaturaForm:FormGroup;
  cursos = [];
  profesores = [];
  constructor(private fb: FormBuilder,
              private router: Router, 
              private cursosSrv:CursosService,
              private asignaturaSrv: AsignaturaService,
              private profesoresSrv: ProfesorService
              ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadDataSelects();
  }

  initForm() {
    this.asignaturaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      profesor: ['', [Validators.required]],
    })
  }

  crearAsignatura() {
    if (this.asignaturaForm.invalid) {
      Swal.fire(
        '',
        'Hay campos importantes vacios!',
        'info'
      )
      return;
     }

     const formValue = {
        ...this.asignaturaForm.value, 
        curso:{ id : this.asignaturaForm.value.curso},
        profesor:{ id : this.asignaturaForm.value.profesor}
      };

     this.asignaturaSrv.create(formValue).subscribe( resp => {
      console.log(resp);
      Swal.fire(
        'Registro creado!',
        '',
        'success'
      ).then( () => {
         this.router.navigate(['/asignaturas'])
      })
    });
  }

  loadDataSelects() {
    forkJoin([
      this.cursosSrv.getAll(),
      this.profesoresSrv.getAll()
    ]).subscribe(([ cursos , profesores]) => {

      this.cursos = cursos;
      this.profesores = profesores;
    } )
  }

}
