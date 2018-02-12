import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Garage } from './garage';

@Injectable()
export class GarageService {

  constructor(private httpClient: HttpClient) { }

  public create(garage: Garage): Observable<Garage> {
    return this.httpClient.post<Garage>("/api/garages/create", garage);
  }

  public findByZoneId(zoneId: number): Observable<Garage[]> {
    console.log("Id in service", zoneId);
    return this.httpClient.get<Garage[]>("/api/garages?z=" + zoneId);
  }

}
