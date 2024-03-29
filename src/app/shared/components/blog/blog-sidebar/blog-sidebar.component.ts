import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../form/contact-form/contact-form.component';
import { TagListModule } from '../tag-list/tag-list.module';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule, ContactFormComponent, TagListModule],
  templateUrl: './blog-sidebar.component.html',
  styleUrl: './blog-sidebar.component.scss'
})
export class BlogSidebarComponent {
  blog_items: any;
  @Input() top_cls: string = 'pl-40';
}
