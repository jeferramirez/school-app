import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { AsignaturaComponent } from "./asignatura/asignatura.component";
import { CrearAsignaturaComponent } from "./asignatura/crear-asignatura/crear-asignatura.component";
import { ListAsignaturaComponent } from "./asignatura/list-asignatura/list-asignatura.component";
import { ColegioComponent } from "./colegio/colegio.component";
import { CrearColegioComponent } from "./colegio/crear-colegio/crear-colegio.component";
import { ListColegioComponent } from "./colegio/list-colegio/list-colegio.component";
import { CrearCursoComponent } from "./curso/crear-curso/crear-curso.component";
import { CursoComponent } from "./curso/curso.component";
import { ListCursoComponent } from "./curso/list-curso/list-curso.component";
import { CrearEstudianteComponent } from "./estudiante/crear-estudiante/crear-estudiante.component";
import { EstudianteComponent } from "./estudiante/estudiante.component";
import { ListEstudianteComponent } from "./estudiante/list-estudiante/list-estudiante.component";
import { CrearProfesorComponent } from "./profesor/crear-profesor/crear-profesor.component";
import { ListProfesorComponent } from "./profesor/list-profesor/list-profesor.component";
import { ProfesorComponent } from "./profesor/profesor.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },

  {
    path: "colegios",
    component: ColegioComponent,
    children: [
      { path: "", redirectTo: "list" },
      { path: "list", component: ListColegioComponent },
      { path: "add", component: CrearColegioComponent }
    ],
  },
  {
    path: "cursos",
    component: CursoComponent,
    children: [
      { path: "", redirectTo: "list" },
      { path: "list", component: ListCursoComponent },
      { path: "add", component: CrearCursoComponent }
    ],
  },
  {
    path: "asignaturas",
    component: AsignaturaComponent,
    children: [
      { path: "", redirectTo: "list" },
      { path: "list", component: ListAsignaturaComponent },
      { path: "add", component: CrearAsignaturaComponent }
    ],
  },
  {
    path: "profesores",
    component: ProfesorComponent,
    children: [
      { path: "", redirectTo: "list" },
      { path: "list", component: ListProfesorComponent },
      { path: "add", component: CrearProfesorComponent }
    ],
  },
  {
    path: "estudiantes",
    component: EstudianteComponent,
    children: [
      { path: "", redirectTo: "list" },
      { path: "list", component: ListEstudianteComponent },
      { path: "add", component: CrearEstudianteComponent }
    ],
  },
];
