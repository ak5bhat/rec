import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Registration } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registration = new Registration();
  msg = '';

  public signupForm !: FormGroup;
  // router: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private _router: Router, private _service: ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      empid: [''],
      firstname: [''],
      midllename: [''],
      lastname: [''],
      email: [''],
      password: [''],
      mobile: ['']
    })
  }
  signup() {
    this._service.registerUserFromRemote(this.registration).subscribe(
      data => {
        console.log("respose received");
        this._router.navigate(['/login'])
      },
      error => {
        console.log("exception occured");
        this.msg = error.error;
      }
    )
  }

}
