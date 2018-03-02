import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../shared/zone.service';
import { Zone } from '../shared/zone';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  zones: Zone[];

  isLoading: boolean;

  constructor(private zoneService: ZoneService) { }

  ngOnInit() {
    this.isLoading = true;
    this.zoneService.getAll()
      .subscribe(zones => {this.zones = zones; this.isLoading = false; console.log(JSON.stringify(zones));},
                err => console.log("Error retrieving zones: ", JSON.stringify(err)));
  }

}
