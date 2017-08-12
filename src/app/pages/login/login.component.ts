import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login implements OnInit {

  ngOnInit() {
      console.log("init login");
  }

  public onSubmit(values: Object): void {
    window.location.href = environment.baseURL + '/google/googleauth';
  }
}
