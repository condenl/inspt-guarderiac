import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUser } from './app-user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppUserService {

  constructor(private httpClient: HttpClient) { }

  public getByTerm(term: string): Observable<AppUser[]> {
    return this.httpClient.get<AppUser[]>("/api/users/" + term);
  }

}
