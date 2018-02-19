import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from './vehicle';
import { FormUtils } from './form-utils';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CodeValue } from './code-value';

@Injectable()
export class VehicleService {

  private vehicleEditEvent: BehaviorSubject<CodeValue<number, Vehicle>> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>("/api/vehicles");
  }

  public create(vehicle: Vehicle): Observable<Vehicle> {
    console.log("vehicle sent: ", vehicle);
    return this.httpClient.post<Vehicle>("/api/vehicles/create", FormUtils.vehicleToFormData(vehicle));
  }

  public findByUserId(userId: number): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>("/api/vehicles/user/" + userId);
  }

  public findByOwnerAndType(userId: number, vehicleFamilyId: number): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>("/api/vehicles?u=" + userId + "&f=" + vehicleFamilyId);
  }

  public setVehicleUpdated(garageId: number, vehicle: Vehicle): void {
    this.vehicleEditEvent.next(new CodeValue<number, Vehicle>(garageId, vehicle));
  }

  public getVehicleEdit(): Observable<CodeValue<number, Vehicle>> {
    return this.vehicleEditEvent.asObservable();
  }

}
    