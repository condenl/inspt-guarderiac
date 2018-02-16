import { Component, OnInit, Input } from '@angular/core';
import { Garage } from '../shared/garage';
import { GarageService } from '../shared/garage.service';
import { AsideROService } from '../shared/AsideROService';

@Component({
  selector: 'app-garage-item',
  templateUrl: './garage-item.component.html',
  styleUrls: ['./garage-item.component.css']
})
export class GarageItemComponent implements OnInit {

  @Input()
  private garage: Garage;

  constructor(private garageService: GarageService, private asideROService: AsideROService) { }

  ngOnInit() {
  }

  public destroyAsideRO(): void {
    console.log("garage id:" + this.garage.id);
    this.asideROService.destroyChildComponents('/zones/' + this.garage.zoneDTO.id + '(asideRO:garage-detail/' + this.garage.id + ')');
  }

}
