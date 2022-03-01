import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Repo } from 'src/app/shared/models/repo.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss'],
})
export class RepoDetailsComponent implements OnInit, OnDestroy {
  repo: Repo | undefined;
  paramsSubscription: Subscription = new Subscription();
  languages: Languages[] = [];
  total: number = 0;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.apiService.getRepo(params.id, params.repo).subscribe((repo) => {
        this.repo = repo;
        this.getStack(this.repo);
      });
    });
  }
  getStack(repo: Repo) {
    this.apiService.getStack(repo).subscribe((res) => {
      Object.entries(res).forEach(([key, value]) => {
        this.languages.push({
          name: key,
          value: value,
        });
      });
      this.getTotal();
    });
  }

  getTotal() {
    this.languages.forEach((language) => {
      this.total += language.value;
    });
  }

  roundNumber(number:number): number{
    return Math.round(number);
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}

interface Languages {
  name: string;
  value: number | any;
}
