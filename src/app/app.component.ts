import { Component, OnInit } from '@angular/core';
import { AsideROService } from './shared/aside-ro.service';
import { Router } from '@angular/router';
import { AsideROEvent } from './shared/aside-ro-event.enum';
import { CodeValue } from './shared/code-value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private showAsideRO: boolean = true;

  constructor(private asideROService: AsideROService, private route: Router) { }

  ngOnInit() {
    this.asideROService.getAsideRO().subscribe(event => this.updateAsideRO(event));
  }

  public updateAsideRO(event: CodeValue<AsideROEvent, string>): void {
    console.log("update aside ro", event);
    if (event != null) {
      if (event.code == AsideROEvent.REFRESH) {
        this.route.navigateByUrl(event.value);
        this.showAsideRO = false;
        //poner el loader
        setTimeout(() => this.postDestroy(), 1000);
      } else {
        this.showAsideRO = false;
      }
    }
  }

  public postDestroy(): void {
    setTimeout(() => this.showAsideRO = true);
    //sacar el loader
  }

}
