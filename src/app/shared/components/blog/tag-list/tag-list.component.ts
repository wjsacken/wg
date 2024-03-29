import { Component, Input } from '@angular/core';
import { IBlogDT } from '../../../types/blog-d-t';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent {
  @Input() blog_items: IBlogDT[] = [];

  getTagCounts(): { [tag: string]: number } {
    const tagCounts: { [tag: string]: number } = {};

    if (this.blog_items && this.blog_items.length > 0) {
      this.blog_items.forEach(blog => {
        if (blog.tag) { // Check if tag exists
          const tag = blog.tag; // Assuming tag is a single string
          tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        }
      });
    }

    return tagCounts;
  }
}
