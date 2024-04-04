import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilsService } from '../../../services/utils.service';
import { IBlogDT } from '../../../types/blog-d-t';
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
  public blog_items: IBlogDT[] = [];
  public latestBlogs: IBlogDT[] = []; // Add this property
  public pageSize: number = 2;
  public pageNo: number = 1;

  constructor(
    public utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.utilsService.filterBlogs().subscribe((response) => {
        // Sorting Filter
        this.blog_items = response.filter((b) => b.page === 'wg');
        // Sort blogs by date
        this.blog_items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        // Get the latest 2 blogs
        this.latestBlogs = this.blog_items.slice(0, 2);
      });
    });
  }
}
