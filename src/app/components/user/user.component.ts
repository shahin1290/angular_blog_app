import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User

  constructor() {
    
  }

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName : 'Doe',
      age : 23,
      address: {
        street: '50 Main st',
        city : 'Boston',
        state: 'MA'
      }
    }
  }
  

}


