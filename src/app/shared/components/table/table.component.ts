import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() users: User[] | undefined;
  @Input() pageIndex: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(index:number){
    this.pageChange.emit(index);
  }

}
