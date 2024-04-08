import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UtilsService } from '../../shared/services/utils.service';
import { catchError } from 'rxjs/operators';
import { of, switchMap } from 'rxjs';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { BlogSidebarComponent } from '../../shared/components/blog/blog-sidebar/blog-sidebar.component';
import { BlogGridItemComponent } from '../../shared/components/blog/blog-grid-item/blog-grid-item.component';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderTwoComponent,BlogGridItemComponent,BlogSidebarComponent, FooterTwoComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {

  public blog: IBlogDT | null | undefined;
  public related_blogs:IBlogDT[] = [];

  constructor(
    private route: ActivatedRoute,
    private utilsService: UtilsService,
    private router: Router,
    private titleService: Title, 
    private metaService: Meta
  ) { }

  ngOnInit() {

    this.utilsService.filterBlogs().subscribe((response) => {
      this.related_blogs = response.filter((b) => b.page === 'blog_grid').slice(0, 2);
    });

    this.route.paramMap.pipe(
      switchMap(params => {
        const blogSlug = params.get('slug');
        if (blogSlug) {
          return this.utilsService.getBlogBySlug(blogSlug).pipe(
            catchError(error => {
              console.error('Error fetching blog:', error);
              // Handle the error as needed, e.g., navigate to a 404 page
              return of(null); // Emit null if there's an error
            })
          );
        }
        return of<IBlogDT | null>(null); // Emit null if there's no blogSlug
      })
    ).subscribe((blog: IBlogDT | null | undefined) => {
      if (!blog) {
        // Handle the case when the blog is null or undefined
        // For example, navigate to a 404 page
      } else {
        // Proceed with handling the fetched blog
        this.blog = blog;
        
        // Set the dynamic title and meta description
        if (blog.title) {
          this.titleService.setTitle(blog.title);
        }
        if (blog?.desc) {
          this.metaService.updateTag({ name: 'description', content: blog.desc });
        }
      }
    });
  }
}
