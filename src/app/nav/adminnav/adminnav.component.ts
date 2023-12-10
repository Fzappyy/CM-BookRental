import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

  data = {} as User | null;
  display:any;

  constructor(private fireB: FirebaseService) { 
    this.fireB.currentUser.subscribe((user)=>{
    this.data = user;
    this.display = this.fireB.displayName;
  })  
  }
  
  ngOnInit(): void {
  }

}
