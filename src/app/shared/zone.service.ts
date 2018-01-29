import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zone } from './zone';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ZoneService {

  constructor(private httpClient: HttpClient) { }

  public getZones(): Observable<Zone[]> {
    return this.httpClient.get<Zone[]>("/api/zones");
  }

  public getZoneById(id: number): Observable<Zone> {
    return this.httpClient.get<Zone>('/api/zones/' + id);
  }

}
