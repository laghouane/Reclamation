import { Component } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public _service: ReclamationService){}

  public handlelogin(f: NgForm){
    this._service.login(f.value).subscribe({
      next(response) {
        console.log("res: ", response);
        
      }
    })

  }

}
