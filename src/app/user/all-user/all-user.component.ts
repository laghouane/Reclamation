import { Component } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {

  constructor(public _service: ReclamationService){}

}
