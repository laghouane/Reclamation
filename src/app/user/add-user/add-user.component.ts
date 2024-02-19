import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(public _service: ReclamationService){}

  public handleSubmit(f: NgForm){
    
  }

}
