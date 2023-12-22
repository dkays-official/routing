import { Component } from '@angular/core';
import { StoragemanagementService } from 'src/app/services/storagemanagement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide  = true;
  email  = "";
  psw = "";
  constructor(private _localStorage : StoragemanagementService)  {    
  }
  login() {
    let email = this.email;


    let loggedUserData = this._localStorage.getData(email);
    if (loggedUserData) {
     
        let loggedUser = JSON.parse(loggedUserData);  
        if (loggedUser.password === this.psw) {
          console.log("Welcome " + loggedUser.fname);          
        } else {
          console.error("Incorrect password");
     
        }    
    } else {
      console.error("User not found");      
    }
  }
}
  
  
