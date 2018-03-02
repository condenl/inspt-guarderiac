import { Component, OnInit, Input } from '@angular/core';
import { Garage } from '../shared/garage';
import { GarageService } from '../shared/garage.service';
import { Vehicle } from '../shared/vehicle';
import { VehicleService } from '../shared/vehicle.service';
import { Photo } from '../shared/photo';
import { CodeValue } from '../shared/code-value';
import { RouteUtilsService } from '../shared/route-utils.service';
import { AuthorizeService } from '../shared/authorize.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  @Input()
  garage: Garage;

  private selectedVehicleId: number;

  private vehicles: Vehicle[];

  constructor(private garageService: GarageService, private vehicleService: VehicleService, private routeUtils: RouteUtilsService, private authorizeService: AuthorizeService) {
    authorizeService.checkAuthorities();
  }

  ngOnInit() {
    if (this.garage.vehicleDTO == null || this.garage.vehicleDTO.id == null) {
      this.vehicleService.findByOwnerAndType(this.garage.appUserDTO.id, this.garage.zoneDTO.vehicleFamilyDTO.id).subscribe(
        vehicles => this.vehicles = vehicles,
        err => console.log(err)
      );
      this.vehicleService.getVehicleEdit().subscribe(
        event => this.handleVehicleEdit(event),
        err => console.log(err)
      );
      //TODO unsubscribe if the vehicle can be reset
    }
  }

  public onVehicleChange(): void {
    this.garageService.changeVehicle(this.garage.id, this.selectedVehicleId).subscribe(
      vehicle => this.vehicleService.setVehicleUpdated(this.garage.id, vehicle),
      err => console.log(err)
    );
  }

  public handleVehicleEdit(event: CodeValue<number, Vehicle>): void {
    if (event != null) {
      this.garage.vehicleDTO = this.normalizeVehicle(event.value);
    }
  }

  public normalizeVehicle(vehicle: Vehicle): Vehicle {
    if (vehicle.photoDTO == null) {
      vehicle.photoDTO = new Photo();
    }
    return vehicle;
  }

}
