import { Component, OnInit } from '@angular/core';
import { AsideROService } from './shared/AsideROService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private showAsideRO: boolean = true;

  constructor(private asideROService: AsideROService, private route: Router) { }

  ngOnInit() {
    this.asideROService.getAsideRO().subscribe(url => this.refreshAsideRO(url));
  }

  public refreshAsideRO(url: string): void {
    console.log("destroying garage detail, url received:", url);
    this.route.navigateByUrl(url);
    this.showAsideRO = false;
    //poner el loader
    setTimeout(() => this.postDestroy(url), 1000);
  }

  public postDestroy(url: string): void {
    setTimeout(() => this.showAsideRO = true);
    //sacar el loader
  }

}
