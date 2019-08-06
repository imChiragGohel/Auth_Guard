import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private routes: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
  }

  logout() {
    const state: RouterStateSnapshot = this.routes.routerState.snapshot;
    localStorage.clear();
    this.routes.navigate(['/login'], { queryParams: { 'returnUrl': state.url } });
  }
}
