import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColegioService } from 'app/services/colegio.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-colegio',
  templateUrl: './list-colegio.component.html',
  styleUrls: ['./list-colegio.component.css']
})
export class ListColegioComponent implements OnInit {


  displayedColumns: string[] = [ 'id','name', 'adress', 'createdAt'];
  dataSource = new MatTableDataSource([]);
  constructor( private colegiService: ColegioService) { }

  ngOnInit(): void {
    this.getAllColegios();
  }

  getAllColegios() {

    this.colegiService.getAll().subscribe( (resp: any) => {
      console.log(resp);
      this.dataSource.data = resp;
    });
  }
}
