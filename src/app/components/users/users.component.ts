import { User } from './../../models/User';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  enableAdd: boolean = false;
  showUserForm: boolean = true;
  @ViewChild('userForm') form: any;
  
  constructor() { }

  ngOnInit() {
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
  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('Form is not valid')
    }else{
      value.isActive = true;
      value.registered = new Date('03/09/2017 11:30:00');
      value.showExtended = true;
      this.users.unshift(value);
      // this.form.reset();
    }
  }
}
