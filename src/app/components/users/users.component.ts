import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  enableAdd: boolean = false;


  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName : 'Doe',
        age : 63,
        address: {
          street: '50 Main st',
          city : 'Boston',
          state: 'MA'
        },
        image:'http://lorempixel.com/600/600/people/3',
        isActive: false
      },
      {
        firstName: 'Shahin',
        lastName : 'Patowary',
        age : 33,
        address: {
          street: 'sakttegoren 29',
          city : 'Stockholm',
          state: 'Sweden'
        },
        isActive:true
      },
      {
        firstName: 'Kona',
        lastName : 'Begum',
        age : 23,
        address: {
          street: '50 Main st',
          city : 'Linkoping',
          state: 'Sweden'
        },
        image:'http://lorempixel.com/600/600/people/1',
        isActive: true
      }
    ]
  }
  

}
