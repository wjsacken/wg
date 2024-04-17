import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import Swiper from 'swiper';
import {register} from 'swiper/element';
register();
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { ServiceAreaSevenComponent } from '../../shared/components/service/service-area-seven/service-area-seven.component';
import { UtilsService } from '../../shared/services/utils.service';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HeaderTwoComponent,ServiceAreaSevenComponent,FooterTwoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(public utilsService: UtilsService,
    private titleService: Title, 
    private metaService: Meta) { };

  public gallery_images = [
    {img:'/assets/img/slider/about/_47.jpg',
      title: 'team47'
    },
    {img:'/assets/img/slider/about/_48.jpg',
      title: 'team48'
    },
    {img: '/assets/img/slider/about/_49.jpg',
      title: 'team49'
    },
    {img: '/assets/img/slider/about/_50.jpg',
      title: 'team50'
    },
    {img: '/assets/img/slider/about/_51.jpg',
      title: 'team51'
    },
    {img: '/assets/img/slider/about/_52.jpg',
      title: 'team52'
    },
    {img: '/assets/img/slider/about/_53.jpg',
      title: 'team53'
    },
    {img: '/assets/img/slider/about/_54.jpg',
      title: 'team54'
    },
    {img: '/assets/img/slider/about/_55.jpg',
      title: 'team55'
    },
    {img: '/assets/img/slider/about/_56.jpg',
      title: 'team56'
    },
    {img: '/assets/img/slider/about/_58.jpg',
      title: 'team58'
    },
  ];

  faq_items = [
    {
      id: "one",
      title: "EXPERIENCED",
      show: true,
      desc: "Our firm continues to operate and thrive under the leadership and four decades of experience of founding partner, Mona Lisa Wallace. Together, Mona Lisa and her partner of over 25 years, Bill Graham, have built a firm of seasoned and dedicated attorneys and legal professionals who share their high standard of excellence and perseverance on behalf of their clients. We know what it takes because we have been there before.",
    },
    {
      id: "two",
      title: "FOCUSED ON YOU",
      desc: "“Our Clients Are Our Priority” has been our mission since Day One. Our firm culture is focused on listening to our clients, caring about our clients, and developing legal strategies to advance their legal rights. We aim to lessen the burdens and improve the outlook for our clients as much as possible after a devastating life setback.",
    },
    {
      id: "three",
      title: "REPUTATION",
      desc: "We are known as one of the hardest-working law firms for harmed and injured persons and their families. We are driven to overcome obstacles blocking our clients' access to justice. We pride ourselves on thinking outside the box. And we are not afraid to go up against some of the largest corporate actors in the world.",
    }
  ]

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }

  ngOnInit(): void {
    new Swiper('.about__gallery-slider-active', {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.about-button-next',
        prevEl: '.about-button-prev'
      }
    });
    this.titleService.setTitle('About Wallace &amp; Graham, Attorneys at Law');

    // Dynamically set the meta description
    this.metaService.updateTag({ name: 'description', content: 'Learn about Wallace &amp; Graham, a leading personal injury law firm in North Carolina. Contact us for expert legal representation.' });
  }
}
