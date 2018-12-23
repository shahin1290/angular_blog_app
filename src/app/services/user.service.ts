import { Injectable } from '@angular/core';

import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]
  data: Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName : 'Doe',
        email: 'shahin@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 08:30:00'),
        showExtended: false
      },
      {
        firstName: 'Shahin',
        lastName : 'Patowary',
        email: 'sh@yahoo.com',
        isActive:true,
        registered: new Date('03/11/2018 09:30:00'),
        showExtended: false
      },
      {
        firstName: 'Kona',
        lastName : 'Begum',
        email: 'pato@gmai.com',
        isActive: true,
        registered: new Date('03/09/2017 11:30:00'),
        showExtended: false
      }
    ]
  }
  getData(){
    this.data = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1)
      },1000)

      setTimeout(()=>{
        observer.next(2)
      },2000)

      setTimeout(()=>{
        observer.next(1)
      },3000)
      
    })

    return this.data
    
  }
  getUsers(): User[]{
    return this.users
  }
  addUser(user:User){
    this.users.unshift(user);
  }
}
