import { Component, OnInit } from '@angular/core';
import { SearchUserResponse, User } from '../shared/models/user.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] | undefined;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUser('angular');
  }

  getUser(queryString:string){
    this.apiService.getUsers(queryString).subscribe((res) => {
      if(res.items){
        this.users = res.items;
      }
    });
  }
}
