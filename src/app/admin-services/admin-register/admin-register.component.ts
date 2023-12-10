import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AdminRegister } from 'src/app/models/auth.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  isSignedIn = false;
  role = 'admin';
  adminRegister = {} as AdminRegister;

  regform= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    fname:[' ', Validators.required],
    lname:[' ', Validators.required],
  })
  

  constructor(private fb: FormBuilder, private fireB: FirebaseService) { }
  ngOnInit(): void {
  }


  async onRegister(email:string, password:string, fname:string, lname:string){
    this.adminRegister.fname = fname;
    this.adminRegister.lname = lname;
    this.adminRegister.name = fname + lname;
    this.adminRegister.email = email;
    this.adminRegister.password = password; 
    var output = await this.fireB.registerAdmin(this.adminRegister);
    console.log(output);
    this.isSignedIn = output.success;
  }
}

  
