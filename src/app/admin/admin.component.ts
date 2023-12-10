import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data = {} as User | null;
  display:any;

  constructor(public fireB: FirebaseService) {   
  }

  ngOnInit(): void { 
    this.fireB.currentAdmin.subscribe((user)=>{
      console.log(user);
      this.display = this.fireB.displayName;
    }) 
  }

  ngOnChanges(): void {
  }
}
