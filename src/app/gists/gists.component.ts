import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gist } from '../shared/models/gists.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.scss']
})
export class GistsComponent implements OnInit {

  gists: Gist[] | undefined;
  paramsSubscription: Subscription = new Subscription();
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.apiService.getGists(params.id).subscribe((gists) => {
        this.gists = gists;
      });
    });
  }
}
