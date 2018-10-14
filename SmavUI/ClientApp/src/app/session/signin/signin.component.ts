import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  //isLogin: boolean = false;
  //isLoginError: boolean = false;
  loading = false;
  api_root: string; 
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      showisLogin: false,
      showisLoginError: false
    });
    //this.userService.logout();
    //this.appconfig.getJSON();
    //this.api_root = this.appconfig.GetKey("api_root");
    //this.appconfig.getJSON().subscribe((data: any) => {
    //  debugger;
    //  var x = data;
    //});
  }

  onSubmit(username, password) {
    //let xx = this.appconfig.getApiUser("api_root");
    this.userService.SignInUser(username, password).subscribe((data: any) => {
      var TestUser = Boolean(data.isSuccess);
      if (TestUser) {
        //localStorage.setItem('userToken', data.token);
        localStorage.setItem('userToken', JSON.stringify(data));
        this.router.navigate(['/dashboard']);
      }
      else {
        this.form.controls['showisLogin'].setValue(true);
      }
    },
      (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(['']);
        }
        else {
          this.form.controls['showisLoginError'].setValue(true);
        }

      });
    //this.alerts.setMessage('All the fields are required', 'error');
    //this.router.navigate(['/dashboard']);
  }
}
