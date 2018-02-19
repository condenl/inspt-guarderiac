import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZoneItemComponent } from './zone-item/zone-item.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ZoneService } from './shared/zone.service';
import { LoaderComponent } from './loader/loader.component';
import { GarageItemComponent } from './garage-item/garage-item.component';
import { GarageCreateComponent } from './garage-create/garage-create.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleService } from './shared/vehicle.service';
import { VehicleFamilyService } from './shared/vehicle-family.service';
import { AppUserService } from './shared/app-user.service';
import { GarageService } from './shared/garage.service';
import { GarageDetailComponent } from './garage-detail/garage-detail.component';
import { AsideROService } from './shared/aside-ro.service';
import { AppIconComponent } from './app-icon/app-icon.component';
import { RouteUtilsService } from './shared/route-utils.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ZoneItemComponent,
    ZoneDetailComponent,
    LoaderComponent,
    GarageItemComponent,
    GarageCreateComponent,
    VehicleCreateComponent,
    VehicleDetailComponent,
    GarageDetailComponent,
    AppIconComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '',                          component: HomeComponent},
      {path: 'zones/:zoneId',             component: ZoneDetailComponent},
      {path: 'vehicles/:vehicleId',       component: VehicleDetailComponent},
      {path: 'create/vehicle',            component: VehicleCreateComponent},
      {path: 'create/garage',             component: GarageCreateComponent},
      {path: 'garage-detail/:garageId',   component: GarageDetailComponent, outlet: 'asideRO'}
    ]),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [ZoneService, VehicleService, VehicleFamilyService, AppUserService, GarageService, AsideROService, RouteUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
