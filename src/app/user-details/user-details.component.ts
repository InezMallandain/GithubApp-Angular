import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User | undefined;
  paramsSubscription: Subscription = new Subscription();
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.apiService.getUser(params.id).subscribe(user => {
        user;
        this.user = user;
      });
    });

    // this.user = {
    //   id:
    //   name: this.route.snapshot.params['name']
    // };
    // this.paramsSubscription = this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.user.id = params['id'];
    //     this.user.name = params['name'];
    // });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
