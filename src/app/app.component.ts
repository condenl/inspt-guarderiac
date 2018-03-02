import { Component, OnInit } from '@angular/core';
import { AsideROService } from './shared/aside-ro.service';
import { Router } from '@angular/router';
import { AsideROEvent } from './shared/aside-ro-event.enum';
import { HttpClient } from '@angular/common/http';
import { CodeValue } from './shared/code-value';
import { AppService } from './shared/app.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showAsideRO: boolean = true;

  constructor(private asideROService: AsideROService, private appService: AppService, private httpClient: HttpClient, private route: Router) {
    this.appService.authenticate({}, undefined);
  }

  ngOnInit() {
    this.asideROService.getAsideRO().subscribe(event => this.updateAsideRO(event));
  }

  public updateAsideRO(event: CodeValue<AsideROEvent, string>): void {
    if (event != null) {
      if (event.code == AsideROEvent.REFRESH) {
        this.route.navigateByUrl(event.value);
        this.showAsideRO = false;
        //show loader
        setTimeout(() => this.postAsideRODestroy(), 1000);
      } else {
        this.showAsideRO = false;
      }
    }
  }

  public postAsideRODestroy(): void {
    this.showAsideRO = true;
    //hide loader
  }

  logout() {
    this.appService.logout();
  }

}
