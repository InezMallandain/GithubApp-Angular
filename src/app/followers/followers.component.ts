import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
})
export class FollowersComponent implements OnInit {
  users: User[] | undefined;
  paramsSubscription: Subscription = new Subscription();
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.apiService.getFollowers(params.id).subscribe((users) => {
        this.users = users;
      });
    });
  }
}
