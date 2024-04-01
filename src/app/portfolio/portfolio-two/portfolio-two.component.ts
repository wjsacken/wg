import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { CtaAreaThreeComponent } from '../../shared/components/cta/cta-area-three/cta-area-three.component';
import news_data from '../../shared/data/news-data';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-portfolio-two',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderTwoComponent,CtaAreaThreeComponent, FooterTwoComponent],
  templateUrl: './portfolio-two.component.html',
  styleUrl: './portfolio-two.component.scss'
})
export class PortfolioTwoComponent {

  public active_category = 'All';
  public news_data = [...news_data].sort((a, b) => {
    // Sort by date in descending order
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  constructor() {}

  encodeHeadline(headline: string): string {
    return encodeURIComponent(headline);
  }
}
