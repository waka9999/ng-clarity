import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { Layout1Component } from './layout1/layout1.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [Layout1Component, Layout1Component],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ClarityModule
  ]
})
export class LayoutModule { }
