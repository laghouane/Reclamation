import { Component } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
public user = {email:"Test"}
  constructor(public _service: ReclamationService, private router: Router){}

  public updateProfile(f : NgForm){
    this._service.updateUser(f.value);
    f.form.reset();
    this.router.navigateByUrl('/list')
  }

  

  public logout(){
    
  }

}
