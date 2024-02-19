import { Component } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';

@Component({
  selector: 'app-my-reclamation',
  templateUrl: './my-reclamation.component.html',
  styleUrls: ['./my-reclamation.component.css']
})
export class MyReclamationComponent {

  constructor(public _ReclamationService: ReclamationService){}

}
