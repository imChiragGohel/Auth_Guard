import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chiled1Component } from './chiled-component/chiled1/chiled1.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { Chiled2Component } from './chiled-component/chiled2/chiled2.component';

@NgModule({
  declarations: [Chiled1Component,DashboardComponent, Chiled2Component],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
