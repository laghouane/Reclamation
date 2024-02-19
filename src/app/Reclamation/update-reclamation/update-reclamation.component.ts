import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent {

  constructor(public _service: ReclamationService, private router: Router){}
  

  public updateItem(f : NgForm){
    this._service.updateUser(f.value);
    f.form.reset();
    this.router.navigateByUrl('/list')
  }

}
