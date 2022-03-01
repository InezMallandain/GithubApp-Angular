import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
const MODULES = [TableComponent, SearchBarComponent];

@NgModule({
  declarations: [MODULES, ],
  imports: [CommonModule, FormsModule],
  exports: [MODULES],
})
export class SharedModule {}
