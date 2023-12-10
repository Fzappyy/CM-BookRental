import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { UserBorrowComponent } from './user-services/user-borrow/user-borrow.component';
import { UserComponent } from './user/user.component';
import { UserSigninComponent } from './user-services/user-signin/user-signin.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSigninComponent } from './admin-services/admin-signin/admin-signin.component';
import { AdminRegisterComponent } from './admin-services/admin-register/admin-register.component';
import { AdminAddComponent } from './admin-services/admin-add/admin-add.component';
import { UserRegisterComponent } from './user-services/user-register/user-register.component';
import { AdminRemoveComponent } from './admin-services/admin-remove/admin-remove.component';
import { AdminCheckborrowComponent } from './admin-services/admin-checkborrow/admin-checkborrow.component';



const routes: Routes = [
{path: '', redirectTo: 'homescreen', pathMatch: 'full' },
{path: 'homescreen', component:HomescreenComponent},

//FOR USER
{path: 'app-user', component: UserComponent},
{path: 'user-borrow', component: UserBorrowComponent},
{path: 'user-signin', component: UserSigninComponent},
{path: 'user-register', component: UserRegisterComponent},

//FOR ADMIN
{path: 'app-admin', component: AdminComponent},
{path: 'admin-signin', component: AdminSigninComponent},
{path: 'admin-register', component: AdminRegisterComponent},
{path: 'admin-add', component: AdminAddComponent},
{path: 'admin-remove', component: AdminRemoveComponent},
{path: 'admin-check', component: AdminCheckborrowComponent},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
