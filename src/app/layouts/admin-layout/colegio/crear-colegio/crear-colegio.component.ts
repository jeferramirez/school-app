import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColegioService } from 'app/services/colegio.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-colegio',
  templateUrl: './crear-colegio.component.html',
  styleUrls: ['./crear-colegio.component.css']
})
export class CrearColegioComponent implements OnInit {

  colegioForm: FormGroup;
  constructor( private fb: FormBuilder, private colegioSrv: ColegioService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.colegioForm = this.fb.group( {
      name: ['', [Validators.required]],
      adress: ['', [Validators.required]]
    })
  }

  create() {
    if (this.colegioForm.invalid) {
      Swal.fire(
        '',
        'Hay campos importantes vacios!',
        'info'
      )
      return;
    }
    this.colegioSrv.create(this.colegioForm.value).subscribe( resp => {
      console.log(resp);
      Swal.fire(
        'Registro creado!',
        '',
        'success'
      ).then( () => {
         this.router.navigate(['/colegios'])
      })
    });
  }

}
