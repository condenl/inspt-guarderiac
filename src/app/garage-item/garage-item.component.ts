import { Component, OnInit, Input } from '@angular/core';
import { Garage } from '../shared/garage';
import { GarageService } from '../shared/garage.service';
import { AsideROService } from '../shared/aside-ro.service';
import { VehicleService } from '../shared/vehicle.service';
import { Vehicle } from '../shared/vehicle';
import { CodeValue } from '../shared/code-value';
import { AuthorizeService } from '../shared/authorize.service';

@Component({
  selector: 'app-garage-item',
  templateUrl: './garage-item.component.html',
  styleUrls: ['./garage-item.component.css']
})
export class GarageItemComponent implements OnInit {

  @Input()
  garage: Garage;

  constructor(private garageService: GarageService, private asideROService: AsideROService, private vehicleService: VehicleService, private authorizeService: AuthorizeService) {
    authorizeService.checkAuthorities();
  }

  ngOnInit() {
    this.vehicleService.getVehicleEdit().subscribe(
      event => this.identifyVehicle(event),
      err => console.log(err)
    );
  }

  public destroyAsideRO(): void {
    this.asideROService.destroyChildComponents('/zones/' + this.garage.zoneDTO.id + '(asideRO:garage-detail/' + this.garage.id + ')');
  }

  public identifyVehicle(event: CodeValue<number, Vehicle>): void {
    if (event != null && event.code == this.garage.id) {
      this.garage.vehicleDTO = event.value;
    }
  }

}
