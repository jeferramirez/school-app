import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ColegioComponent } from './colegio/colegio.component';
import { MaterialTableComponent } from 'app/material-table/material-table.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { CrearColegioComponent } from './colegio/crear-colegio/crear-colegio.component';
import { ListColegioComponent } from './colegio/list-colegio/list-colegio.component';
import { CursoComponent } from './curso/curso.component';
import { ListCursoComponent } from './curso/list-curso/list-curso.component';
import { CrearCursoComponent } from './curso/crear-curso/crear-curso.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { ListAsignaturaComponent } from './asignatura/list-asignatura/list-asignatura.component';
import { CrearAsignaturaComponent } from './asignatura/crear-asignatura/crear-asignatura.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ListProfesorComponent } from './profesor/list-profesor/list-profesor.component';
import { CrearProfesorComponent } from './profesor/crear-profesor/crear-profesor.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListEstudianteComponent } from './estudiante/list-estudiante/list-estudiante.component';
import { CrearEstudianteComponent } from './estudiante/crear-estudiante/crear-estudiante.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MaterialStepperComponent } from 'app/material-stepper/material-stepper.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatTableModule,
    MatAutocompleteModule
  ],
  declarations: [
    DashboardComponent,
    ColegioComponent,
    MaterialTableComponent,
    CrearColegioComponent,
    ListColegioComponent,
    CursoComponent,
    ListCursoComponent,
    CrearCursoComponent,
    AsignaturaComponent,
    ListAsignaturaComponent,
    CrearAsignaturaComponent,
    ProfesorComponent,
    ListProfesorComponent,
    CrearProfesorComponent,
    EstudianteComponent,
    ListEstudianteComponent,
    CrearEstudianteComponent,
    MaterialStepperComponent
  ]
})

export class AdminLayoutModule {}
