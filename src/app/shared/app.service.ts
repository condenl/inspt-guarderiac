import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  authenticated = false;

  constructor(private httpClient: HttpClient, private route: Router) {
  }

  public authenticate(credentials, callback, errorCallback = undefined): void {
    const headers = new HttpHeaders(credentials ? {
        authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.httpClient.get('user', {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    }, err => errorCallback && errorCallback());
  }

  public logout(): void {
    this.httpClient.post('logout', {}).finally(() => {
      this.authenticated = false;
      this.route.navigateByUrl('/login');
    }).subscribe();
  }

}
