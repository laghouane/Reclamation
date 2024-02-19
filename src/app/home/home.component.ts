import { Component } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public _service: ReclamationService){}

}
