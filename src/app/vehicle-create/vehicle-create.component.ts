import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/vehicle.service';
import { Vehicle } from '../shared/vehicle';
import { VehicleFamilyService } from '../shared/vehicle-family.service';
import { VehicleFamily } from '../shared/vehicle-family';
import { AppUserService } from '../shared/app-user.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { AppUser } from '../shared/app-user';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../shared/photo';
import { ActivatedRoute } from '@angular/router';
import { RouteUtilsService } from '../shared/route-utils.service';
import { AuthorizeService } from '../shared/authorize.service';

@Component({
  selector: "app-vehicle-create",
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();

  vehicleFamilies: VehicleFamily[];

  searchTerm: FormControl = new FormControl();

  searchResults: AppUser[];

  submitting: boolean = false;

  submitted: boolean = false;

  constructor(private vehicleService: VehicleService, private vehicleFamilyService: VehicleFamilyService, private appUserService: AppUserService, 
    private route: ActivatedRoute, private routeUtils: RouteUtilsService, private authorizeService: AuthorizeService) {
    authorizeService.checkAuthorities();
  }

  ngOnInit() {
    this.vehicleFamilyService.getAll()
      .subscribe(vehicleFamilies => this.vehicleFamilies = vehicleFamilies,
                 err => console.log("Error retrieving vehicle families: ", JSON.stringify(err)));

    this.searchTerm
        .valueChanges
        .debounceTime(400)
        .subscribe(term => this.appUserService.getByTerm(term)
          .subscribe(searchResults => this.searchResults = searchResults));
  }

  public onSubmit(): void {
    this.submitting = true;
    
    this.vehicleService.create(this.vehicle).subscribe(data => { this.vehicle = this.normalizeVehicle(data); },
      err => console.log(err),
      () => { this.submitted = true; this.submitting = false; });
  }

  public normalizeVehicle(vehicle: Vehicle): Vehicle {
    if (vehicle.appUserDTO == null) {
      vehicle.appUserDTO = new AppUser();
    }
    if (vehicle.photoDTO == null) {
      vehicle.photoDTO = new Photo();
    }
    return vehicle;
  }

  get diagnostic(): string {
    return JSON.stringify(this.vehicle);
  }

}
