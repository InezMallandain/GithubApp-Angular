import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repo } from '../../models/repo.model';

@Component({
  selector: 'app-repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.scss']
})
export class ReposTableComponent implements OnInit {
  @Input() repos: Repo[] | undefined;
  @Input() pageIndex: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(index:number){
    this.pageChange.emit(index);
  }

}
