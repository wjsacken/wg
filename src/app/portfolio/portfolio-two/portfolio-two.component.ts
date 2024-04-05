import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { CtaAreaThreeComponent } from '../../shared/components/cta/cta-area-three/cta-area-three.component';
import news_data from '../../shared/data/news-data';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio-two',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderTwoComponent,CtaAreaThreeComponent, FooterTwoComponent],
  templateUrl: './portfolio-two.component.html',
  styleUrl: './portfolio-two.component.scss'
})
export class PortfolioTwoComponent {
  constructor(
    private titleService: Title, 
    private metaService: Meta
  ){}
  public active_category = 'All';
  public news_data = [...news_data].sort((a, b) => {
    // Sort by date in descending order
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });


  encodeHeadline(headline: string): string {
    return encodeURIComponent(headline);
  }
  ngOnInit(){
    this.titleService.setTitle('Wallace & Graham in the News | North Carolina');

    // Dynamically set the meta description
    this.metaService.updateTag({ name: 'description', content: 'Wallace &amp; Graham personal injury law firm is in the news for their expert legal representation in North Carolina. Contact us for more information.' });
  }
}
