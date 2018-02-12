import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZoneItemComponent } from './zone-item/zone-item.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ZoneService } from './shared/zone.service';
import { LoaderComponent } from './loader/loader.component';
import { GarageItemComponent } from './garage-item/garage-item.component';
import { GarageCreateComponent } from './garage-create/garage-create.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';
import { VehicleListingComponent } from './vehicle-listing/vehicle-listing.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleService } from './shared/vehicle.service';
import { VehicleFamilyService } from './shared/vehicle-family.service';
import { AppUserService } from './shared/app-user.service';
import { GarageService } from './shared/garage.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ZoneItemComponent,
    ZoneDetailComponent,
    AdvancedSearchComponent,
    LoaderComponent,
    GarageItemComponent,
    GarageCreateComponent,
    VehicleItemComponent,
    VehicleListingComponent,
    VehicleCreateComponent,
    VehicleDetailComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '',                    component: HomeComponent},
      {path: 'zones/:zoneId',       component: ZoneDetailComponent},
      {path: 'vehicles',            component: VehicleListingComponent},
      {path: 'vehicles/:vehicleId', component: VehicleDetailComponent},
      {path: 'create/vehicle',      component: VehicleCreateComponent},
      {path: 'create/garage',      component: GarageCreateComponent}
    ]),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [ZoneService, VehicleService, VehicleFamilyService, AppUserService, GarageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
