import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from '../shared/zone.service';
import { Zone } from '../shared/zone';
import { Garage } from '../shared/garage';
import { GarageService } from '../shared/garage.service';
import { AsideROService } from '../shared/aside-ro.service';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})
export class ZoneDetailComponent implements OnInit, OnDestroy {

  private zone: Zone = new Zone();

  private garages: Garage[];

  private isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private zoneService: ZoneService, private garageService: GarageService, private asideROService: AsideROService) { }

  ngOnInit() {
    this.zoneService.getZoneById(this.route.snapshot.params['zoneId']).subscribe(
      zone => this.populateGaragesDetails(zone),
      err => console.log(err)
    );
  }

  public populateGaragesDetails(zone: Zone): void  {
    this.zone = zone;
    console.log("zone retrieved:", this.zone.id);
    this.garageService.findByZoneId(this.zone.id).subscribe(
      garages => this.garages = garages,
      err => console.log(err),
      () => this.isLoading = false
    );
  }

  ngOnDestroy() {
    this.asideROService.hideRouterOutlet();
  }

}
