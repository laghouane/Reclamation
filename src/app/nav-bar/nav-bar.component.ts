import { Component } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public _service: ReclamationService){}

}
