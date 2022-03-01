import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Repo } from '../shared/models/repo.model';
import { User } from '../shared/models/user.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos: Repo[] | undefined;
  paramsSubscription: Subscription = new Subscription();
  index: number = 1;
  id:string | undefined;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.apiService.getRepos(params.id).subscribe((repos) => {
        this.repos = repos;
      });
    });
  }

  changePage(index: any){
    this.index = index;
    if(this.id){
      this.apiService.getRepos(this.id, index).subscribe((repos) => {
        this.repos = repos;
      });
    }
   
  }
}
