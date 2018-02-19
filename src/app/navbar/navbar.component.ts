import { Component, OnInit } from '@angular/core';
import { RouteUtilsService } from '../shared/route-utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private routeUtils: RouteUtilsService) { }

  ngOnInit() {
  }

}
