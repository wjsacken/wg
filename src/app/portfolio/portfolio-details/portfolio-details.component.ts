import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UtilsService } from '../../shared/services/utils.service';
import { catchError } from 'rxjs/operators';
import { of, switchMap } from 'rxjs';
import { INewsDT } from '../../shared/types/news-d-t'; // Import INewsDT interface
import sal from 'sal.js';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { CounterAreaThreeComponent } from '../../shared/components/counter/counter-area-three/counter-area-three.component';
import { PortfolioPostFormComponent } from '../../shared/components/form/portfolio-post-form/portfolio-post-form.component';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,CounterAreaThreeComponent,PortfolioPostFormComponent,FooterTwoComponent],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.scss'
})
export class PortfolioDetailsComponent implements OnInit {
  public news: INewsDT | null | undefined;

  constructor(
    private route: ActivatedRoute,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const headline = params.get('headline');
        const decodedHeadline = headline ? decodeURIComponent(headline) : null; // Decode the headline
        console.log('Headline:', decodedHeadline);
        if (decodedHeadline) {
          return this.utilsService.getNewsByHeadline(decodedHeadline).pipe(
            catchError(error => {
              console.error('Error fetching news:', error);
              return of(null);
            })
          );
        }
        return of<INewsDT | null>(null);
      })
    ).subscribe((news: INewsDT | null | undefined) => {
      if (!news) {
        console.log('No news found');
        // Handle the case when the news is null or undefined
      } else {
        this.news = news;
        console.log('Fetched News:', this.news);
      }
    });
  }
}