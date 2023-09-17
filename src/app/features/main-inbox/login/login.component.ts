import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UserLogin } from 'src/app/core/model/user/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form = new FormGroup({});  
  model = {userName: '', password: ''};
  public fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [{
        key: 'userName',
        type: 'input',
        className: 'login-user-id',
        templateOptions: {
          label: 'User Name',
          required: true
        }
      },
      {
        key: 'password',
        type: 'input',
        className: 'password-user-id',
        templateOptions: {
          label: 'Password',
          type: 'password',
          required: true
        }
      }]
    }
  ];
}
