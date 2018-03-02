import { Component, OnInit, Input } from '@angular/core';
import { Zone } from '../shared/zone';
import { AuthorizeService } from '../shared/authorize.service';

@Component({
  selector: 'app-zone-item',
  templateUrl: './zone-item.component.html',
  styleUrls: ['./zone-item.component.css']
})
export class ZoneItemComponent implements OnInit {

  @Input()
  zone: Zone;

  constructor(private authorizeService: AuthorizeService) {
    authorizeService.checkAuthorities();
  }

  ngOnInit() {
  }

}
