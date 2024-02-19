import { Component } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent {

  constructor(public _ReclamationService: ReclamationService, private router: Router){}

  public handleSubmit(f: NgForm) {
    console.log(f.value)
    this._ReclamationService.addReclamation(f.value);
    f.form.reset();
    this.router.navigateByUrl('/list')
  }

}
