import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { VehicleFamily } from './vehicle-family';

@Injectable()
export class VehicleFamilyService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<VehicleFamily[]> {
    return this.httpClient.get<VehicleFamily[]>("/api/vehicle-families");
  }

}
