import { Component, OnInit, Input } from '@angular/core';
import { Garage } from '../shared/garage';

@Component({
  selector: 'app-garage-item',
  templateUrl: './garage-item.component.html',
  styleUrls: ['./garage-item.component.css']
})
export class GarageItemComponent implements OnInit {

  @Input()
  private garage: Garage;

  constructor() { }

  ngOnInit() {
  }

}
