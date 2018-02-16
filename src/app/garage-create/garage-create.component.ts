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

  private submitting: boolean = false;

  private submitted: boolean = false;

  constructor(private zoneService: ZoneService, private appUserService: AppUserService, private vehicleService: VehicleService,
    private garageService: GarageService) { }
    
  ngOnInit() {
    this.zoneService.getAll().subscribe(zones => this.zones = zones,
      err => console.log("Error retrieving zones: ", JSON.stringify(err)));

    this.userSearchTerm
      .valueChanges
      .debounceTime(400)
      .subscribe(term => this.appUserService.getByTerm(term)
        .subscribe(searchResults => this.userSearchResults = searchResults));
  }

  public changeUser(userId: number): void {
    this.garage.getAppUserDTO.setId = userId;
    this.populateVehiclesByUser(userId);
  }

  public populateVehiclesByUser(userId: number): void {
    this.vehicles = [];
    this.vehicleService.findByUserId(userId).subscribe(vehicles => this.vehicles = vehicles,
      err => console.log("Error retrieving user(id: " + userId + ") vehicles: ", JSON.stringify(err)))
  }

  public onSubmit(): void {
    this.submitting = true;
    
    this.garageService.create(this.garage).subscribe(data => { this.garage = data; console.log("vehicle saved", data); },
      err => console.log(err),
      () => { this.onSubmitCompleted() });
    console.log("Garage form submitted: ", this.garage);
  }

  public onSubmitCompleted(): void {
    this.submitted = true; 
    this.submitting = false;
    if (!this.garage.getVehicleDTO) {
      this.garage.setVehicleDTO = new Vehicle();
    }
  }

  get diagnostic(): string {
    return JSON.stringify(this.garage);
  }

}
