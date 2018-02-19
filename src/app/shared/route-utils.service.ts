import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouteUtilsService {

  constructor(private route: Router) { }
  
  public routeTo(url: string): void {
    this.route.navigateByUrl(url);
  }

}
