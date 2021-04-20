import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AsignaturaService } from 'app/services/asignatura.service';

@Component({
  selector: 'app-list-asignatura',
  templateUrl: './list-asignatura.component.html',
  styleUrls: ['./list-asignatura.component.css']
})
export class ListAsignaturaComponent implements OnInit {

  displayedColumns: string[] = [ 'id','nombre', 'createdAt'];
  dataSource = new MatTableDataSource([]);
  constructor( private asignaturaSrv: AsignaturaService) { }

  ngOnInit(): void {
    this.asignaturaSrv.getAll().subscribe( (resp:any) => this.dataSource.data = resp)
  }

}
