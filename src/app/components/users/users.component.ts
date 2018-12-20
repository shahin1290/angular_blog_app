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
        isActive: false,
        registered: new Date('03/11/2017 08:30:00'),
        showExtended: false
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
        isActive:true,
        registered: new Date('03/11/2018 09:30:00'),
        showExtended: false
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
        isActive: true,
        registered: new Date('03/09/2017 11:30:00'),
        showExtended: false
      }
    ]
  }
}
