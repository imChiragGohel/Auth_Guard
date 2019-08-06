import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "dashboard", loadChildren: () => import('./components/dashboard/dashboard.module').then(module => module.DashboardModule), canActivate: [AuthGuard] },
  //{ path: "dashboard", loadChildren: './components/dashboard/dashboard.module#DashboardModule',},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
