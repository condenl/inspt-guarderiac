import { Component, OnInit } from '@angular/core';
import { Garage } from '../shared/garage';

@Component({
  selector: 'app-garage-create',
  templateUrl: './garage-create.component.html',
  styleUrls: ['./garage-create.component.css']
})
export class GarageCreateComponent implements OnInit {

  private garage: Garage;

  constructor() { }

  ngOnInit() {
  }

}
