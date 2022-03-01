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
  user: string = "";
  index: number = 1;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUser('angular');
  }

  getUser(user:string, index:number = 1){ 
    this.user = user;
    this.apiService.getUsers(user, index).subscribe((res) => {
      if(res.items){
        this.users = res.items;
      }
    });
  }

  changePage(index: any){
    this.index = index;
    this.getUser(this.user, index);
  }
}
