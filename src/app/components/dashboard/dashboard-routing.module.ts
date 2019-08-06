import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chiled1Component } from './chiled-component/chiled1/chiled1.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { Chiled2Component } from './chiled-component/chiled2/chiled2.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'chiled1', component: Chiled1Component, canActivate: [AuthGuard] },
      { path: 'chiled2', component: Chiled2Component, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
