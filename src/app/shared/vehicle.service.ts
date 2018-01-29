import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from './vehicle';

@Injectable()
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>("/api/vehicles");
  }

  public create(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.post<Vehicle>("/api/vehicles/create", vehicle);
  }

}
