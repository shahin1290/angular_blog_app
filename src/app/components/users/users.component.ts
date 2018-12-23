import { UserService } from '../../services/user.service';
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
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();

    this.userService.getData().subscribe(data => {
      console.log(data)
    })
  }

  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('Form is not valid')
    }else{
      value.isActive = true;
      value.registered = new Date('03/09/2017 11:30:00');
      value.showExtended = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
