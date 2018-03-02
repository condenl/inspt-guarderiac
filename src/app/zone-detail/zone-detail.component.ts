import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from '../shared/zone.service';
import { Zone } from '../shared/zone';
import { Garage } from '../shared/garage';
import { GarageService } from '../shared/garage.service';
import { AsideROService } from '../shared/aside-ro.service';
import { RouteUtilsService } from '../shared/route-utils.service';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})
export class ZoneDetailComponent implements OnInit, OnDestroy {

  zone: Zone = new Zone();

  garages: Garage[];

  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private zoneService: ZoneService, private garageService: GarageService, private asideROService: AsideROService ,
    private routeUtilsService: RouteUtilsService) { }

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
      () => this.onGaragePopulationComplete()
    );
  }

  public onGaragePopulationComplete(): void {
    this.isLoading = false;
    if (this.garages != null && this.garages.length != 0) {
      this.routeUtilsService.routeTo('/zones/' + this.zone.id + '(asideRO:garage-detail/' + this.garages[0].id + ')');
    }
  }

  ngOnDestroy() {
    this.asideROService.hideRouterOutlet();
  }

}
