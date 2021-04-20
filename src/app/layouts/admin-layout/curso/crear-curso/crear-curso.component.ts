import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColegioService } from 'app/services/colegio.service';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  cursoForm: FormGroup;
  colegios = [];
  constructor(private fb: FormBuilder, private colegioSrv: ColegioService, private router: Router, private cursosSrv: CursosService) { }

  ngOnInit(): void {
    this.initForm();
    this.loadDataSelect();
  }


  initForm() {
    this.cursoForm = this.fb.group( {
      grado: ['', [Validators.required]],
      salon: ['', [Validators.required]],
      colegio: ['', [Validators.required]],

    })
  }

  crearCurso() {
     if (this.cursoForm.invalid) {
      Swal.fire(
        '',
        'Hay campos importantes vacios!',
        'info'
      )
      return;
     }
     const formValue = { ...this.cursoForm.value, colegio:{ id : this.cursoForm.value.colegio}}
     this.cursosSrv.create(formValue).subscribe( resp => {
      console.log(resp);
      Swal.fire(
        'Registro creado!',
        '',
        'success'
      ).then( () => {
         this.router.navigate(['/cursos'])
      })
    });
  }

  loadDataSelect() {
    this.colegioSrv.getAll().subscribe( (resp: any []) => {
      this.colegios = resp.length > 0 ? resp : [];
    })
  }

}
