import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[]
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
  getUsers(): User[]{
    return this.users
  }
  addUser(user:User){
    this.users.unshift(user);
  }
}
