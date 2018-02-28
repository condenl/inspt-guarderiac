import { Component, OnInit } from '@angular/core';
import { Garage } from '../shared/garage';
import { ZoneService } from '../shared/zone.service';
import { Zone } from '../shared/zone';
import { FormControl } from '@angular/forms';
import { AppUser } from '../shared/app-user';
import { AppUserService } from '../shared/app-user.service';
import { Vehicle } from '../shared/vehicle';
import { VehicleService } from '../shared/vehicle.service';
import { GarageService } from '../shared/garage.service';
import { ActivatedRoute } from '@angular/router';
import { RouteUtilsService } from '../shared/route-utils.service';

@Component({
  selector: 'app-garage-create',
  templateUrl: './garage-create.component.html',
  styleUrls: ['./garage-create.component.css']
})
export class GarageCreateComponent implements OnInit {

  private garage: Garage = new Garage();

  private zones: Zone[];

  private userSearchTerm: FormControl = new FormControl();

  private userSearchResults: AppUser[];

  private vehicles: Vehicle[];

  private waitingDependencies: boolean = false;

  private submitted: boolean = false;

  private isEdit: boolean = false;

  constructor(private zoneService: ZoneService, private appUserService: AppUserService, private vehicleService: VehicleService,
    private garageService: GarageService, private route: ActivatedRoute, private routeUtils: RouteUtilsService) {
  }
  
  ngOnInit() {
    let garageId: number = this.route.snapshot.params['garageId'];
    this.isEdit = garageId != null;
    if (this.isEdit) {
      this.initEditView(garageId);
    }
    
    this.zoneService.getAll().subscribe(zones => this.zones = zones,
      err => console.log("Error retrieving zones: ", JSON.stringify(err)));  
    
    this.userSearchTerm
      .valueChanges
      .debounceTime(400)
      .subscribe(term => this.appUserService.getByTerm(term)
        .subscribe(searchResults => this.userSearchResults = searchResults));
  }

  private initEditView(garageId: number): void {
    this.waitingDependencies = true;
    this.garageService.findById(garageId).subscribe(
      garage => this.initEditForm(garage),
      err => console.log(err),
      () => this.waitingDependencies = false
    );
  }

  private initEditForm(garage: Garage) {
    this.garage = this.initGarage(garage);
    this.userSearchTerm.setValue(this.buildUserSelectFrontValue(this.garage.appUserDTO));
    this.populateVehicles(this.garage.appUserDTO.id, this.garage.zoneDTO.vehicleFamilyDTO.id);
  }

  public buildUserSelectFrontValue(appUser: AppUser) {
    return appUser.username + " - " + appUser.name;
  }

  private initGarage(garage: Garage): Garage { //TODO move this
    if (garage.vehicleDTO == null || garage.vehicleDTO.id == null) {
      garage.vehicleDTO = new Vehicle();
    }
    return garage;
  }

  public changeUser(userId: number): void {
    this.garage.getAppUserDTO.setId = userId;
    this.populateVehicles(userId, this.garage.zoneDTO.vehicleFamilyDTO.id, true);
  }

  public changeZone(familyId: number): void {
    this.populateVehicles(this.garage.appUserDTO.id, familyId, true);
  }

  public populateVehicles(userId: number, familyId: number, reset = false): void {
    this.vehicles = [];
    if (userId != null && familyId != null) {
      if (reset) {
        this.garage.vehicleDTO.id = null;
      }
      this.vehicleService.findByOwnerAndType(userId, familyId).subscribe(
        vehicles => this.vehicles = vehicles,
        err => console.log("Error retrieving user(id: " + userId + ") vehicles: ", JSON.stringify(err)))
    }
  }

  public onSubmit(): void {
    this.waitingDependencies = true;
    
    this.garageService.create(this.garage).subscribe(
      data => this.garage = this.normalizeGarage(data),
      err => console.log(err),
      () => this.onSubmitCompleted()
    );
  }

  public normalizeGarage(garage: Garage): Garage {
    if (garage.vehicleDTO == null) {
      garage.vehicleDTO = new Vehicle();
    }
    return garage;
  }

  public onSubmitCompleted(): void {
    this.submitted = true; 
    this.waitingDependencies = false;
  }

  get diagnostic(): string {
    return JSON.stringify(this.garage);
  }

}
