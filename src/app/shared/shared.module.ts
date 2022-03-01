import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';

const MODULES = [TableComponent];

@NgModule({
  declarations: [MODULES],
  imports: [CommonModule],
  exports: [MODULES],
})
export class SharedModule {}
