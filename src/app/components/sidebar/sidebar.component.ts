import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fa fa-star', class: 'dashboard' },
    { path: '/colegios', title: 'Colegios',  icon:'fa fa-building', class: '' },
    { path: '/cursos', title: 'Cursos',  icon:'fa fa-laptop', class: '' },
    { path: '/asignaturas', title: 'Asignaturas',  icon:'fa fa-book', class: '' },
    { path: '/profesores', title: 'Profesores',  icon:'fa fa-users', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
