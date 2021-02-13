import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: '主控台',
      icono: 'mdi mdi-chart-line',
      url: '/'
    },
    {
      titulo: '商品管理',
      icono: 'mdi mdi-shopping',
      url: '/dashboard/product'
    },
    {
      titulo: '分類管理',
      icono: 'mdi mdi-filter',
      url: '/dashboard/category'
    },
  ];

  constructor() {}
}
