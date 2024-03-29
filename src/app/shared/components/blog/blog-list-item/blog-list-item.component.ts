import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IBlogDT } from '../../../types/blog-d-t';
import blog_data from '../../../data/blog-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-list-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-list-item.component.html',
  styleUrl: './blog-list-item.component.scss'
})
export class BlogListItemComponent {
  public blog_items = [...blog_data].filter(b => b.page === 'wg');
  @Input() blog!: IBlogDT;
}
