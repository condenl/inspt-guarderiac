import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { RouteUtilsService } from './route-utils.service';

@Injectable()
export class AuthorizeService {

  constructor(private appService: AppService, private routeUtils: RouteUtilsService) { }

  public checkAuthorities(): void {
    if (!this.appService.authenticated) {
      this.routeUtils.routeTo('/');
    }
  }

  public canEdit(): boolean {
    return this.appService.authorities.indexOf("ADMIN") > -1;
  }

}
