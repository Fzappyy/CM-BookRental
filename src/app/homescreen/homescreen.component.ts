import { Component, OnInit } from '@angular/core';
import { LibraryModule } from '../rental.module';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
  providers: [AuthenticationService]
})
export class HomescreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
