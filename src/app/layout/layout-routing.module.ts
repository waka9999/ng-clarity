import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout1Component } from './layout1/layout1.component';

const routes: Routes = [
  {
    path: "layout-1",
    component: Layout1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
