import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GarageService } from '../shared/garage.service';
import { Garage } from '../shared/garage';
import { AsideROService } from '../shared/AsideROService';

@Component({
  selector: 'app-garage-detail',
  templateUrl: './garage-detail.component.html',
  styleUrls: ['./garage-detail.component.css']
})
export class GarageDetailComponent implements OnInit {

  private garage: Garage;

  constructor(private route: ActivatedRoute, private garageService: GarageService, private asideROService: AsideROService) { }

  ngOnInit() {
    this.garageService.findById(this.route.snapshot.params['garageId']).subscribe(
      garage => this.garage = garage, 
      err => console.log(err));
      console.log("init");

  }

}
