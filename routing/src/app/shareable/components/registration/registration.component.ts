import { Component } from '@angular/core';
import { StoragemanagementService } from 'src/app/services/storagemanagement.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  getData : any;
  setData : any;
  constructor(private _localStorage : StoragemanagementService)  {    
  }

  hide = true;
  fname : string = "";
  lname = "";
  email : string = "";
  psw = "";
  users : any [] = [];
  registration() {
    let user = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        password: this.psw
    };
    this._localStorage.setData(user.email, JSON.stringify(user));
}
}
