import { Component, OnInit } from '@angular/core';
import { RouteUtilsService } from '../shared/route-utils.service';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  error: boolean = false;

  constructor(private appService: AppService, public routeUtils: RouteUtilsService) {
    if (appService.authenticated) {
      routeUtils.routeTo('/home');
    }
  }

  ngOnInit() {
  }

  public login(): void {
    this.error = false;
    this.appService.authenticate(
      this.credentials, 
      () => this.routeUtils.routeTo('/home'),
      err => this.error = true
    );
  }

}
