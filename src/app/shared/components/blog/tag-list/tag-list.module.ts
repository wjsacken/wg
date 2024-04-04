import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list.component';

@NgModule({
  declarations: [TagListComponent],
  imports: [CommonModule, RouterModule],
  exports: [TagListComponent] // Export the component to be used in other modules
})
export class TagListModule {}
