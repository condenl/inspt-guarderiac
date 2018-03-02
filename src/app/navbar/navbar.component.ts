import { Component, OnInit } from '@angular/core';
import { RouteUtilsService } from '../shared/route-utils.service';
import { AppService } from '../shared/app.service';
import { AuthorizeService } from '../shared/authorize.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService, public routeUtils: RouteUtilsService, private authorizeService: AuthorizeService) { }

  ngOnInit() {
  }

  public logout(): void {
    return this.appService.logout();
  }

  public authenticated(): boolean {
    return this.appService.authenticated;
  }

  public canEdit(): boolean {
    return this.authorizeService.canEdit();
  }

}
