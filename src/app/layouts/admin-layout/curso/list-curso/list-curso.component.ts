import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from 'app/services/cursos.service';

@Component({
  selector: 'app-list-curso',
  templateUrl: './list-curso.component.html',
  styleUrls: ['./list-curso.component.css']
})
export class ListCursoComponent implements OnInit {

  displayedColumns: string[] = [ 'id','grado', 'salon', 'createdAt'];
  dataSource = new MatTableDataSource([]);

  constructor(private cursosSrv: CursosService) { }

  ngOnInit(): void {
     this.cursosSrv.getAll().subscribe( (resp: any) => this.dataSource.data = resp);
  }

  

}
