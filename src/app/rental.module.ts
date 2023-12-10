import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LibraryRoutingModule } from './rental.routing.module';
import { UserComponent } from './user/user.component';
import { UserBorrowComponent } from './user-services/user-borrow/user-borrow.component';
import { HeadnavComponent } from './nav/headnav/headnav.component';
import { FooternavComponent } from './nav/footernav/footernav.component';
import { UsernavComponent } from './nav/usernav/usernav.component';
import { UserSigninComponent } from './user-services/user-signin/user-signin.component';
import { AuthenticationService } from './services/authentication.service';
import { AdminComponent } from './admin/admin.component';
import { AdminSigninComponent } from './admin-services/admin-signin/admin-signin.component';
import { AdminRegisterComponent } from './admin-services/admin-register/admin-register.component';
import { AdminAddComponent } from './admin-services/admin-add/admin-add.component';
import { UserRegisterComponent } from './user-services/user-register/user-register.component';
import { AdminRemoveComponent } from './admin-services/admin-remove/admin-remove.component';
import { AdminCheckborrowComponent } from './admin-services/admin-checkborrow/admin-checkborrow.component';
import { AdminnavComponent } from './nav/adminnav/adminnav.component';


@NgModule({
  declarations: [
      HomescreenComponent,
      HeadnavComponent,
      FooternavComponent,      

      //FOR USERS
      UserComponent,
      UsernavComponent,
      UserSigninComponent,
      UserRegisterComponent,
      UserBorrowComponent,

      //FOR ADMIN
      AdminComponent,
      AdminSigninComponent,
      AdminRegisterComponent,
      AdminAddComponent,
      AdminRemoveComponent,
      AdminCheckborrowComponent,
      AdminnavComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
  ],
  exports: [],
  providers:[AuthenticationService]

})
export class LibraryModule { }
