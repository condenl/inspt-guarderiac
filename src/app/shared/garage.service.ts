import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Garage } from './garage';
import { Vehicle } from './vehicle';

@Injectable()
export class GarageService {

  constructor(private httpClient: HttpClient) { }

  public create(garage: Garage): Observable<Garage> {
    return this.httpClient.post<Garage>("/api/garages/create", garage);
  }

  public findById(garageId: number): Observable<Garage> {
    return this.httpClient.get<Garage>("/api/garages/" + garageId);
  }

  public findByZoneId(zoneId: number): Observable<Garage[]> {
    return this.httpClient.get<Garage[]>("/api/garages?z=" + zoneId);
  }

  public changeVehicle(garageId: number, vehicleId: number): Observable<Vehicle> {
    return this.httpClient.post<Vehicle>("/api/garages/change-vehicle/" + garageId, vehicleId);
  }

}
