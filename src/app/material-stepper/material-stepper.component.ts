import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ProfesorService } from 'app/services/profesor.service';
import { Observable } from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';


@Component({
  selector: 'app-material-stepper',
  templateUrl: './material-stepper.component.html',
  styleUrls: ['./material-stepper.component.css']
})
export class MaterialStepperComponent implements OnInit {

  isLinear = false;
  profesores= [];
  asignaturas = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  filteredOptions: Observable<any[]>;
  filteredAsignaturas: Observable<any[]>;
  displayedColumns: string[] = [ 'id','nombre', 'createdAt'];
  dataSource = new MatTableDataSource([]);

  constructor( private fb: FormBuilder, private profesoresSrv: ProfesorService) { }

  ngOnInit(): void {

    this.initForms();
    this.loadDataProfesores();

    this.filteredOptions = this.firstFormGroup.get('nombre').valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.nombre),
      map(name => name ? this._filter(name, 'profesor') : this.profesores.slice())
    
    );

    this.filteredAsignaturas = this.secondFormGroup.get('asignatura').valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.nombre),
      map(name => name ? this._filter(name, 'asignatura') : this.asignaturas.slice())
    );

  }
  
  private _filter(value: string, name: string): any[] {
    const collections = {
      profesor: this.profesores,
      asignatura: this.asignaturas
    }
    const filterValue = value.toLowerCase();
    return collections[name].filter(option => option.nombre.toLowerCase().includes(filterValue));
  }


  displayFn(user: any): string {
    return user && user.nombre ? user.nombre : '';
  }
  

  initForms() {
    this.firstFormGroup = this.fb.group({
      nombre: ['', Validators.required]
    });

    this.secondFormGroup = this.fb.group({
      asignatura: ['', Validators.required]
    });
  }

  loadDataProfesores() {
    this.profesoresSrv.getAll().subscribe( resp => this.profesores = resp.length > 0? resp : [])
  }


  setDataSource(event, entidad) {
    console.log(event);
    if (entidad == 'asignatura') {
      this.dataSource.data = event.option.value.estudiantes;
      
    }else {
      this.secondFormGroup.get('asignatura').setValue('');
      this.asignaturas = event.option.value.asignaturas;
    }
  }

}
