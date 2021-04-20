import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProfesorService } from 'app/services/profesor.service';

@Component({
  selector: 'app-list-profesor',
  templateUrl: './list-profesor.component.html',
  styleUrls: ['./list-profesor.component.css']
})
export class ListProfesorComponent implements OnInit {

  displayedColumns: string[] = [ 'id','nombre', 'createdAt'];
  dataSource = new MatTableDataSource([]);
  constructor( private profesorSrv: ProfesorService) { }

  ngOnInit(): void {
    this.profesorSrv.getAll().subscribe( (resp: any) => this.dataSource.data = resp)
  }

}
