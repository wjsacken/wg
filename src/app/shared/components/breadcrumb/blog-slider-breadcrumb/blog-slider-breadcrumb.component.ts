import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();


@Component({
  selector: 'app-blog-slider-breadcrumb',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-slider-breadcrumb.component.html',
  styleUrl: './blog-slider-breadcrumb.component.scss'
})
export class BlogSliderBreadcrumbComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;

  public slider_data = [
    {
      id: 1,
      bg: 'assets/img/blog/clientuploads/Blog_Images/will_filing_a_case_affect_my_benefits.jpg',
      tag: 'Camp Lejeune Water Contamination',
      title: 'Will Filing A Claim Under The Camp Lejeune Justice Act (CLJA) Affect My VA Benefits?',
      date: 'Monday, October 10, 2022',
      slug:'filing-a-camp-lejeune-claim-affect-va-benefits',
    },
  ]

  ngAfterViewInit() {
    if (this.swiperContainer) {
      this.swiperInstance =  new Swiper('.blog__breadcrumb-slider-active', {
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 0,
        pagination: {
          el: ".blog-slider-dot-breadcrumb",
          clickable: true,
        },
      });
    }
  }


}
