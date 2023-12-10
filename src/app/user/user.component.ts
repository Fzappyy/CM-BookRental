import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data = {} as User | null;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  display:any;

  constructor(public fireB: FirebaseService) { 
    this.fireB.currentUser.subscribe((user)=>{
    this.data = user;
    this.display = this.fireB.displayName;
  })  
  }

  ngOnInit(): void {  
  }

}
