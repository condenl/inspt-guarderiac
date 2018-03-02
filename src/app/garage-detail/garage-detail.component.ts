import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GarageService } from '../shared/garage.service';
import { Garage } from '../shared/garage';
import { Photo } from '../shared/photo';
import { RouteUtilsService } from '../shared/route-utils.service';
import { AuthorizeService } from '../shared/authorize.service';

@Component({
  selector: 'app-garage-detail',
  templateUrl: './garage-detail.component.html',
  styleUrls: ['./garage-detail.component.css']
})
export class GarageDetailComponent implements OnInit {

  garage: Garage;

  constructor(private route: ActivatedRoute, private garageService: GarageService, private routeUtils: RouteUtilsService, private authorizeService: AuthorizeService) {
    authorizeService.checkAuthorities();
  }

  ngOnInit() {
    this.garageService.findById(this.route.snapshot.params['garageId']).subscribe(
      garage => this.garage = this.normalizeGarage(garage), 
      err => console.log(err));
  }

  public normalizeGarage(garage: Garage): Garage {
    if (garage.vehicleDTO != null && garage.vehicleDTO.photoDTO == null) {
      garage.vehicleDTO.photoDTO = new Photo();
    }
    return garage;
  }

  public canEdit(): boolean {
    return this.authorizeService.canEdit();
  }

}
