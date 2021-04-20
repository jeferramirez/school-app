import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesorService } from 'app/services/profesor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {

  profesorForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private profesorSrv: ProfesorService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.profesorForm = this.fb.group({
      nombre: ['', [Validators.required]],
    })
  }


  crearProfesor() {
    if (this.profesorForm.invalid) {
     Swal.fire(
       '',
       'Hay campos importantes vacios!',
       'info'
     )
     return;
    }

    this.profesorSrv.create(this.profesorForm.value).subscribe( resp => {
     console.log(resp);
     Swal.fire(
       'Registro creado!',
       '',
       'success'
     ).then( () => {
        this.router.navigate(['/profesores'])
     })
   });
 }

}
