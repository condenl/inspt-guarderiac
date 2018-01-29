import { Component, OnInit, Input } from '@angular/core';
import { Zone } from '../shared/zone';

@Component({
  selector: 'app-zone-item',
  templateUrl: './zone-item.component.html',
  styleUrls: ['./zone-item.component.css']
})
export class ZoneItemComponent implements OnInit {

  @Input()
  private zone: Zone;

  constructor() { }

  ngOnInit() {
  }

}
