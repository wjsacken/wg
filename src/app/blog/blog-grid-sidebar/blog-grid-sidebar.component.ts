import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { BlogGridItemComponent } from '../../shared/components/blog/blog-grid-item/blog-grid-item.component';
import { BlogSliderBreadcrumbComponent } from '../../shared/components/breadcrumb/blog-slider-breadcrumb/blog-slider-breadcrumb.component';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { PaginationService } from '../../shared/services/pagination.service';
import { UtilsService } from '../../shared/services/utils.service';
import { BlogSidebarComponent } from '../../shared/components/blog/blog-sidebar/blog-sidebar.component';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-grid-sidebar',
  standalone: true,
  imports: [CommonModule,HeaderTwoComponent,BlogSliderBreadcrumbComponent,FooterTwoComponent,PaginationComponent,BlogGridItemComponent,BlogSidebarComponent],
  templateUrl: './blog-grid-sidebar.component.html',
  styleUrl: './blog-grid-sidebar.component.scss'
})
export class BlogGridSidebarComponent {

  public blog_items: IBlogDT[] = [];
  public pageSize: number = 12;
  public paginate: any = {}; // Pagination use only
  public pageNo: number = 1;
  

  constructor(
    public paginationService: PaginationService,
    public utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller,
    private titleService: Title, 
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.utilsService.filterBlogs().subscribe((response) => {
        // Sorting Filter
        this.blog_items = response.filter((b) => b.page === 'wg');
        // Paginate Products
        this.paginate = this.paginationService.getPager(this.blog_items.length, Number(+this.pageNo), this.pageSize);
        this.blog_items = this.blog_items.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      });
      
        // Set the dynamic title and meta description
        this.titleService.setTitle('Personal Injury Blog | Wallace & Graham | North Carolina');

        // Dynamically set the meta description
        this.metaService.updateTag({ name: 'description', content: 'Read the personal injury blog from Wallace &amp; Graham, a top law firm in North Carolina. Contact us for expert legal representation.' });
    
    });
  }

  setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
      });
  }
}
