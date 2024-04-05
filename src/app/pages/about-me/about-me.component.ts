import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import {Gallery,GalleryItem} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { ServiceAreaSevenComponent } from '../../shared/components/service/service-area-seven/service-area-seven.component';
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
    ServiceAreaSevenComponent,
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
      year: '11/23/21',
      title: 'Mental Health Counseling for Veterans',
      text: 'Partnered with <a href="https://rowanunitedway.org/" target="_blank">Rowan County United Way</a> and <a href="https://www.oneloverowan.org/" target="_blank">One Love</a> to initiate a new program to expand mental health services available to veterans in Rowan County, regardless of military discharge status or access to funding.  The program brings *combat veteran to combat veteran* mental health counseling to Rowan County.  <strong>The Salisbury Post featured our donation <a href="https://www.salisburypost.com/2021/11/11/organizers-announce-new-donations-tactics-to-get-united-way-campaign-through-homestretch/?fbclid=IwAR2V8UIYVhJqMd3VAj1GKzMqTA6TwXEIpC_G0MYB69Fyyk7oKdRmSZVJLJU" target="_blank">here.</a></strong>  The success stories associated with this new program are remarkable, thanks to One Love’s combat veteran mental health counselor, James. We extremely proud to have initiated this program.',
      meta: 'Veteran services/Mental Health',
    },
    {
      year: '2/21/22',
      title: 'PowerCross',
      text: '<a href="https://www.powercross.org/our-story" target="_blank">PowerCross’s remarkable program</a> supports underprivileged young men with after school meals, athletics coaching and academic tutoring with pick-up and delivery from school to home. PowerCross has provided over 9,000 hours of academic support, served over 250,000 hot meals, and has a 100% high school graduation rate for young men who are a part of the program for at least 2 years, with 70% progressing to college or vocational training. ',
      meta: 'Education/Children/Poverty',
    },
    {
      year: '4/7/22',
      title: 'Special Olympics',
      text: 'Supported Sheriff Kevin Auten’s initiative to raise money for Special Olympics competition in spring/summer games.',
      meta: 'People with Disabilities',
    },
    {
      year: '4/11/22',
      title: 'W&G Family Crisis Council | Survivor bags',
      text: 'W&amp;G Gives packed 30 survivor buckets full of essentials for adult and children who have suffered mental or physical abuse plus a donation of $3,000.00 to fight abuse in our community.  <strong>The Salisbury Post featured our donation <a href="https://www.salisburypost.com/2022/04/12/baskets-by-the-carload-wallace-graham-gifts-supplies-money-to-family-crisis-council/?fbclid=IwAR3FJeEpSbKdjqesT62eeE7ObhIkj4IZ1E3THyCXTntMftuRBIkBMI1pAjA" target="_blank">here.</a></strong> ',
      meta: 'Abused women and children',
    },
    {
      year: '4/18/22',
      title: 'Overton Scholars Luncheon',
      text: 'Donated to support a luncheon in honor of Overton Elementary 5th grade students who excelled academically. Of the 50 scholars, 42 were from low-income families. We congratulate these young men and women on their excellent grades and achievements.',
      meta: 'Education/ Children',
    },
    {
      year: '4/30/22',
      title: 'Pedal Factory *Sponsor*',
      text: 'Pedal Factory’s mission allows any individual the opportunity to earn a bike in exchange for volunteer services.  <a href="https://www.youtube.com/watch?v=W9HWS2wMwNg" target="_blank">Watch video here.</a>  Learn more about event and nonprofit here: <a href="https://www.thepedalfactory.org/" target="_blank">https://www.thepedalfactory.org/.</a> ',
      meta: 'Transportation/Low-Income',
    },
    {
      year: '5/9/22',
      title: 'W&G Gives “Overcoming Adversity” Scholarship Program',
      text: 'W&G Gives awarded 5 scholarships to Rowan County high school seniors who have “overcome adversity.” We presented at each of our winner’s high school graduation ceremonies. Reading the applications was an incredibly humbling experience. It is an honor to support these strong survivors of abuse, disability, misfortune, and exceptional hardship.',
      meta: 'Education',
    },
    {
      year: '5/14/22',
      title: 'Happy Roots’ Earth Day Jam *Sponsor*',
      text: 'Happy Roots enjoyed a successful first annual festival at the new downtown park, BellTower Green. Our firm served 600 patrons with free water and lemonade and gave away over 250 sustainable W&amp;G Gives cups and 100 Earth-day themed stress balls.  To learn more about the incredible work of Happy Roots, visit <a href="https://www.happyrootsnc.org/earth-day-jam-2022" target="_blank">https://www.happyrootsnc.org/earth-day-jam-2022.</a> ',
      meta: ' Support local farmers',
    },
    {
      year: '6/4/22',
      title: 'Walk Like MADD Charlotte *Sponsor*',
      text: 'Our firm has handled hundreds of personal injury and death claims on behalf of individuals harmed by drunk drivers. W&G sponsored this event and had firm participants walk to remember those we have lost and to inspire other to join the fight and commit to a future with no more victims of impaired driving. Proceeds provide: emotional support and assistance with medical and legal struggles that follow drunk driving crash; work with state legislators to adopt tougher laws for DUI offenders and close loopholes. To learn more visit, https://www.madd.org/north-carolina/event/walk-like-madd-charlotte-metro-2021/',
      meta: 'Support victims of drunk drivers',
    },
    {
      year: '9/17/22',
      title: 'Relay for Life of Rowan County *Primary sponsor*',
      text: 'Cancer prevention is a top priority of our firm. We were honored to donate $5,000 to the Relay for Life and American Cancer Society to be used for cancer prevention services in Rowan County. Our heart goes out to every life touched by cancer.',
      meta: 'Access to health care/Cancer prevention',
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
