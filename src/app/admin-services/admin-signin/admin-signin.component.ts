import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminLogin} from 'src/app/models/auth.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css'],
})
export class AdminSigninComponent implements OnInit {

  isSignedIn = false;
  adminLogin = {} as AdminLogin;
  data = {} as Admin;

  signinform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private fireB: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSignin(email: string, password: string) {
    this.adminLogin.email = email;
    this.adminLogin.password = password;

    (await this.fireB.signInAdmin(this.adminLogin)).subscribe(async (result) => {
      console.log(result);
      this.fireB.displayName = result.data?.fname

      //this is to validate if email or password wont match in our firebase//
        if(result.data == null){
          this.router.navigate(['/admin-signin']);
          alert("Invalid Email or Password. Try Again.")}
        else
          this.router.navigate(['/app-admin']);

      this.isSignedIn = result!.success;
      if(this.isSignedIn){
       
        (await this.fireB.logAdmin(result.data!.id)).subscribe((user)=>{
          console.log(this.fireB.currentAdmin);
          this.fireB.updatAdmin(user!)
          
        });
      }
      
    })
  }

}
