import { Component, OnInit } from '@angular/core';
import { AppUser } from '../shared/app-user';
import { RouteUtilsService } from '../shared/route-utils.service';
import { AppUserService } from '../shared/app-user.service';
import { MatSnackBar } from '@angular/material';
import { DuplicatedUserSbComponent } from '../duplicated-user-sb/duplicated-user-sb.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  appUser: AppUser = new AppUser();

  submitting: boolean = false;

  constructor(private appUserService: AppUserService, private routeUtils: RouteUtilsService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.submitting = true;
    this.appUserService.create(this.appUser).subscribe(
      data => this.onCreationSuccessfull(),
      err => this.onCreationError(err),
    );
  }

  public onCreationSuccessfull(): void {
    this.routeUtils.routeTo("/");
  }

  public onCreationError(err: any): void {
    console.log("error", err);
    if (err.status == 422) {
      this.submitting = false;
      this.showUserAlreadyExistMsg();
    }
  }

  private showUserAlreadyExistMsg(): void {
    this.snackBar.openFromComponent(DuplicatedUserSbComponent, {
      duration: 2000,
    });
  }

}
