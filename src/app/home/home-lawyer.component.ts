import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTwoComponent } from '../shared/header/header-two/header-two.component';
import { HeroBannerTwoComponent } from '../shared/components/hero-banner/hero-banner-two/hero-banner-two.component';
import { ServiceAreaTwoComponent } from '../shared/components/service/service-area-two.component';
import { BlogAreaTwoComponent } from '../shared/components/blog/blog-area-two/blog-area-two.component';
import { TestimonialTwoComponent } from '../shared/components/testimonial/testimonial-two.component';
import { TeamAreaTwoComponent } from '../shared/components/team/team-area-two/team-area-two.component';
import { FooterTwoComponent } from '../shared/footer/footer-two/footer-two.component';
import { LawyerContactComponent } from '../shared/components/contact/lawyer-contact/lawyer-contact.component';
import sal from 'sal.js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-lawyer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderTwoComponent,
    HeroBannerTwoComponent,
    ServiceAreaTwoComponent,
    BlogAreaTwoComponent,
    TestimonialTwoComponent,
    TeamAreaTwoComponent,
    LawyerContactComponent,
    FooterTwoComponent,
  ],
  templateUrl: './home-lawyer.component.html',
  styleUrl: './home-lawyer.component.scss',
})
export class HomeLawyerComponent {
  history_lists = [
    {
      year: '01',
      title: 'EXPERIENCED',
      text: 'Our firm continues to operate and thrive under the leadership of Attorney Partners Mona Lisa Wallace, Bill Graham, and Whitney Wallace Williams. Together, they have built a firm of seasoned and dedicated attorneys, paralegals, and legal professionals who share their high standard of excellence and perseverance on behalf of their clients. Our team has the passion, skills, and resources to handle the most complex cases.',
      meta: 'Family Law',
    },
    {
      year: '02',
      title: 'FOCUSED ON YOU',
      text: '"Our Clients Are Our Priority" has been our mission since Day One. Our firm culture is focused on listening to our clients, caring about our clients, and developing legal strategies to advance their legal rights. We aim to lessen the burdens and improve the outlook for our clients as much as possible after a devastating life setback.',
      meta: 'Criminal Law',
    },
    {
      year: '03',
      title: 'REPUTATION',
      text: 'We are known as one of the hardest-working law firms for harmed and injured persons and their families. We are driven to overcome obstacles blocking our clients&apos; access to justice. We pride ourselves on thinking outside the box. And we are not afraid to go up against some of the largest corporate actors in the world.',
      meta: 'Business Law',
    },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    sal({ threshold: 0.0, once: true, root: null });
  }
}
