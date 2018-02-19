import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css']
})
export class AppIconComponent implements OnInit {

  @Input()
  private iconId: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('crossmark', sanitizer.bypassSecurityTrustResourceUrl('assets/images/cross.svg'));
    iconRegistry.addSvgIcon('checkmark', sanitizer.bypassSecurityTrustResourceUrl('assets/images/check.svg'));
    iconRegistry.addSvgIcon('edit',      sanitizer.bypassSecurityTrustResourceUrl('assets/images/edit.svg'));
  }

  ngOnInit() {
  }

}
