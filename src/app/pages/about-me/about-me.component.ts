import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import {Gallery,GalleryItem} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { UtilsService } from '../../shared/services/utils.service';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderTwoComponent,
    FooterTwoComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  public items: GalleryItem[] | undefined;

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox,
    public utilsService: UtilsService,
    private titleService: Title, 
    private metaService: Meta
  ) {};

  history_lists = [

    {
      year: '06/06/23',
      title: 'Terri Hess House',
      text: 'Terri Hess House received 254 children referrals in Rowan County last year with 30% identifying as LGBTQIA.  Powerful statistic –LGBTQIA kids need help at disproportional rates and there is NO one in our community trained and geared to help them.  Because Terri Hess House identified the need and understands that it’s counselors/programs are not designed to help these kids, they are partnering with another nonprofit out of NYC and starting a new counseling program in Rowan County to help. ',
      meta: '$10,000',
    },
    {
      year: '08/02/23',
      title: 'Crosby Scholars',
      text: 'Great Tailgate- College access program for middle and HS students. Preparing next generation for successful college enrollment. Last Dollar Grants provide up to $1000 each year for 4 years to students in need.',
      meta: '$2,500',
    },
    {
      year: '08/04/23',
      title: 'Rowan Literacy Program',
      text: 'Participated in Scrabble Scramble',
      meta: '$2,500',
    },
    {
      year: '08/04/23',
      title: 'Saving Grace',
      text: 'Provides Therapeutic horseback riding, equine facilitated psychotherapy, equine service for Veterans, EMS personnel and youth',
      meta: '$2,500',
    },
    {
      year: '11/03/23',
      title: 'Rowan County Public Library',
      text: 'Adult Outreach Program provides seniors in assisted living facilities, independent living facilities, and nursing homes with library resources.  Program offers large print and audio books. Provides large print books, audio books, art workshops, helping elders write out their life stories.',
      meta: '$2,500',
    },
    {
      year: '11/22/23',
      title: 'Tis the Season Parade',
      text: '',
      meta: '$2,500',
    },
    {
      year: '12/02/23',
      title: 'Toys for Tots',
      text: 'New toys for less fortunate children in Rowan County',
      meta: '$500',
    },
    {
      year: '12/16/23',
      title: 'Wreaths for Veterans',
      text: 'W&G sponsored 106 wreaths to be placed at the Veteran’s cemeteries in Salisbury, NC. The wreaths ceremony is something that takes place each December on National Wreaths Across America Day. There are over 21,000 veterans buried in Rowan county.',
      meta: '$850',
    },
    {
      year: '02/09/24',
      title: 'Isenberg Elementary School',
      text: '5th grade trip to the North Carolina Fort Fisher Aquarium and Kure Beach to learn about the different ecosystems in NC.',
      meta: '$500',
    },
    {
      year: '03/08/24',
      title: 'Rockwell Christian School- Walk a Thon',
      text: 'The Walk a Thon is a fundrasing event that is essential to bridge the gap between low tuition and operating expenses for the Rockwell Christian School.',
      meta: '$12,000',
    },
    {
      year: '03/29/24',
      title: 'W&G Gives “Overcoming Adversity” Scholarship Program',
      text: 'W&G Gives awarded 5 scholarships to Rowan County high school seniors who have “overcome adversity.” We presented at each of our winner’s high school graduation ceremonies. Reading the applications was an incredibly humbling experience. It is an honor to support these strong survivors of abuse, disability, misfortune, and exceptional hardship.',
      meta: '$350',
    },
    {
      year: '04/20/24',
      title: 'Earth Day Jam',
      text: 'Community and school garden program. Supporting local farmers.',
      meta: '$2,500',
    },
    {
      year: '05/02/24',
      title: 'Rowan Helping Ministries',
      text: 'Rowan Helping Ministries services Rowan County with homeless shelters, soup kitchens and clothing',
      meta: '$2,500',
    },
    {
      year: '06/20/24',
      title: 'Meals on Wheels',
      text: 'Landscaping Project for new Meals on Wheels facility',
      meta: '$2,000',
    },
  ];

  ngOnInit(){
    this.titleService.setTitle('Community Outreach Programs in North Carolina | Wallace & Graham');

    // Dynamically set the meta description
    this.metaService.updateTag({ name: 'description', content: 'Wallace &amp; Graham personal injury law firm is committed to community outreach programs in North Carolina. Contact us for more information.' });
  }
  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
