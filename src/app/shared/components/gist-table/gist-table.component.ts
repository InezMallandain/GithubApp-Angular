import { Component, Input, OnInit } from '@angular/core';
import { Gist } from '../../models/gists.model';

@Component({
  selector: 'app-gist-table',
  templateUrl: './gist-table.component.html',
  styleUrls: ['./gist-table.component.scss']
})
export class GistTableComponent implements OnInit {
  @Input() gists: Gist[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getGistFileName(gist: Gist): string {
    return Object.keys(gist.files)[0];
  }

}
