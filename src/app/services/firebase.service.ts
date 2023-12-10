import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { CRUDReturn } from '../models/crud_return.interface';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private usersCollection : AngularFirestoreCollection<User>
  private adminCollection : AngularFirestoreCollection<Admin>

  displayName:any;

  loggedUser = {} as User
  loggedAdmin = {} as Admin

  private source = new BehaviorSubject<User>(this.loggedUser);
  private sourceAd = new BehaviorSubject<Admin>(this.loggedAdmin);

  currentUser = this.source.asObservable();
  currentAdmin = this.sourceAd.asObservable();

  user$!: Observable<User[]>
  admin$!: Observable<Admin[]>
  signedIn: boolean = false;

  constructor(private afDb: AngularFirestore) { 
    this.usersCollection = afDb.collection<User>('users');
    this.user$ = this.usersCollection.valueChanges();

    this.adminCollection = afDb.collection<Admin>('admin');
    this.admin$ = this.adminCollection.valueChanges();
    
  }

  //FOR USER
  async registerUser(payload: any): Promise<CRUDReturn>{
    try{
      payload.BRWD_books = [];
      payload.id = this.afDb.createId();
      this.usersCollection.doc(payload.id).set(payload);
      return {
        success: true,
        data: payload,
      };
    }catch(error){
      console.log(error);
      return {success: false, data: error};
    }
  } 

  async signInUser(payload: any) {
     return this.user$.pipe(map((doc) =>{
      {
        let fl = doc.filter((user)=>{
          return user.email === payload.email;
        });
        
        return fl[0].password == payload.password ? {success: true, data: fl[0]} : {success: true, data: null}
        // return fl.length > 0 ? fl[0] : null;
      }
     }))
  }

  async logUser(id: string){
    return this.user$.pipe(map((doc) =>{
      {
        let fl = doc.filter((user)=>{
          return user.id === id;
        });
        
        return fl.length > 0 ? fl[0] : null;
        // return fl.length > 0 ? fl[0] : null;
      }
     }))
  }

  async updateUser(user: User){
    this.source.next(user);
  }

  //FOR ADMIN
  async registerAdmin(payload: any): Promise<CRUDReturn>{
    try{
      payload.id = this.afDb.createId();
      this.adminCollection.doc(payload.id).set(payload);
      return {
        success: true,
        data: payload,
      };
    }catch(error){
      console.log(error);
      return {success: false, data: error};
    }

  } 

  async signInAdmin(payload: any) {
    return this.admin$.pipe(map((doc) =>{
     {
       let fl = doc.filter((admin)=>{
         return admin.email === payload.email;
       });
       
       return fl[0].password == payload.password ? {success: true, data: fl[0]} : {success: true, data: null}
       // return fl.length > 0 ? fl[0] : null;
     }
    }))
 }

 async logAdmin(id: string){
  return this.admin$.pipe(map((doc) =>{
    {
      let fl = doc.filter((admin)=>{
        return admin.id === id;
      });
      
      return fl.length > 0 ? fl[0] : null;
      // return fl.length > 0 ? fl[0] : null;
    }
   }))
}


  async updatAdmin(admin: Admin){
    this.sourceAd.next(admin);
  }

  
}
