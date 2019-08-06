import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {

  msg: any;
  returnUrl: any = '';

  check(uname: string, p: string) {
    var output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      if (this.returnUrl == '/') {
        console.log('1');
        this.routes.navigate(['/dashboard']);
      } else {
        console.log('2');
        this.routes.navigateByUrl(this.returnUrl);
      }
    }
    else {
      this.msg = 'Invalid username or password';
    }
  }

  constructor(private service: MyserviceService, private routes: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    const tokan = localStorage.getItem('username');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (!tokan) {
      this.routes.navigateByUrl(this.returnUrl);
    } else {
      this.routes.navigateByUrl('dashboard');
    }
  }
}
