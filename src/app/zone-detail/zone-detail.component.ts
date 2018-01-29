import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from '../shared/zone.service';
import { Zone } from '../shared/zone';
import { Garage } from '../shared/garage';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})
export class ZoneDetailComponent implements OnInit {

  private zone: Zone;

  private garages: Garage[];

  constructor(private route: ActivatedRoute, private zoneService: ZoneService) { }

  ngOnInit() {
    this.zoneService.getZoneById(this.route.snapshot.params['zoneId'])
      .subscribe(zone => this.zone = zone);
  }

}
