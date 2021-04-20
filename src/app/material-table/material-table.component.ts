import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  @Input() columns: [];
  @Input() dataSource;
  @Input() searchString: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }


   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }
}
