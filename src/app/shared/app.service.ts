import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  authorities: string[] = [];

  authenticated: boolean = false;

  constructor(private httpClient: HttpClient, private route: Router) {
  }

  public authenticate(credentials, callback, errorCallback = undefined): void {
    const headers = new HttpHeaders(credentials ? {
        authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    this.authorities = [];
    this.httpClient.get('/api/user', {headers: headers}).subscribe(response => {
        console.log(response);
        if (response['name']) {
            this.authenticated = true;
            for (let auth of response['authorities']) {
              this.authorities.push(auth['authority']);
            }
        } else {
            this.authenticated = false;
            
        }
        return callback && callback();
    }, err => errorCallback && errorCallback());
  }

  public logout(): void {
    this.httpClient.post('logout', {}).finally(() => {
      this.authenticated = false;
      this.route.navigateByUrl('/');
    }).subscribe();
  }

}
