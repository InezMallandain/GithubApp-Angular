import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../../models/repo.model';

@Component({
  selector: 'app-repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.scss']
})
export class ReposTableComponent implements OnInit {
  @Input() repos: Repo[] | undefined;
  constructor() { }

  ngOnInit(): void {
   
  }

}
