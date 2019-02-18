import { Component, Input } from '@angular/core';
import { UserList } from '../../models/user-list.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input()
  userList: UserList;
}
