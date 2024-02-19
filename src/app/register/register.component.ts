import { Component } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public _service: ReclamationService){}

}
