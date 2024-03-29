import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { Routes } from '@angular/router';
import { HomeLawyerComponent } from './home/home-lawyer/home-lawyer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactTwoComponent } from './pages/contact-two/contact-two.component';
import { BlogStandardComponent } from './blog/blog-standard/blog-standard.component';
import { BlogGridComponent } from './blog/blog-grid/blog-grid.component';
import { BlogGridTwoComponent } from './blog/blog-grid-two/blog-grid-two.component';
import { BlogGridSidebarComponent } from './blog/blog-grid-sidebar/blog-grid-sidebar.component';
import { BlogListSidebarComponent } from './blog/blog-list-sidebar/blog-list-sidebar.component';
import { BlogMasonryComponent } from './blog/blog-masonry/blog-masonry.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogDetailsTwoComponent } from './blog/blog-details-two/blog-details-two.component';
import { PortfolioClassicComponent } from './portfolio/portfolio-classic/portfolio-classic.component';
import { PortfolioTwoComponent } from './portfolio/portfolio-two/portfolio-two.component';
import { PortfolioGalleryComponent } from './portfolio/portfolio-gallery/portfolio-gallery.component';
import { PortfolioMasonryComponent } from './portfolio/portfolio-masonry/portfolio-masonry.component';
import { PortfolioMetroComponent } from './portfolio/portfolio-metro/portfolio-metro.component';
import { PortfolioSliderComponent } from './portfolio/portfolio-slider/portfolio-slider.component';
import { PortfolioDetailsComponent } from './portfolio/portfolio-details/portfolio-details.component';
import { PortfolioDetailsListComponent } from './portfolio/portfolio-details-list/portfolio-details-list.component';
import { PortfolioDetailsSliderComponent } from './portfolio/portfolio-details-slider/portfolio-details-slider.component';
import { PortfolioDetailsVideoComponent } from './portfolio/portfolio-details-video/portfolio-details-video.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesThreeComponent } from './pages/services-three/services-three.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { TeamClassicComponent } from './pages/team-classic/team-classic.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { SearchComponent } from './pages/search/search.component';
import { FaqComponent } from './pages/faq/faq.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobComponent } from './pages/job/job.component';
import { AttorneyComponent } from './pages/attorneys/attorney.component';
import { AttorneyDetailsComponent } from './pages/attorney-details/attorney-details.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeLawyerComponent, data: { title: 'Wallace & Graham' } },
  { path: 'attorneys', component: AttorneyComponent, data: { title: 'Experienced Attorneys in North Carolina | Wallace & Graham' } },
  { path: 'attorneys/:url', component: AttorneyDetailsComponent, data: { title: 'Attorneys' } },
  { path: 'new-directory', component: TeamClassicComponent, data: { title: 'Directory' } },
  { path: 'testimonials-new', component: FaqComponent, data: { title: 'Testimonials' } },
  { path: 'about-us', component: AboutComponent, data: { title: 'About - Wallace & Graham' } },
  { path: 'practice-areas', component: JobComponent, data: { title: 'Practice Areas - Wallace & Graham' }},
  { path:'practice',children:[
      { path: ':slug', component: JobDetailsComponent, data: { title: 'Practice Area - Wallace & Graham' } },
    ]
  },
  { path: 'new-blog', component: BlogGridSidebarComponent, data: { title: 'Blog Grid Sidebar - Harry' } },
  { path: ':slug', component: BlogDetailsComponent, data: { title: 'Blog Title' } },





  {path:'pages',children:[
    {path:'about',component:AboutComponent,title:'About - Harry'},
    {path:'about-me',component:AboutMeComponent,title:'About Me - Harry'},
    {path:'services',component:ServicesComponent,title:'Services - Harry'},
    {path:'services-three',component:ServicesThreeComponent,title:'Services Three - Harry'},
    {path:'service-details',component:ServiceDetailsComponent,title:'Services Details - Harry'},
    {path:'help-center',component:HelpCenterComponent,title:'Help Center - Harry'},
    {path:'team',component:TeamClassicComponent,title:'Team Classic - Harry'},
    {path:'team-details',component:TeamDetailsComponent,title:'Team Details - Harry'},
    {path:'event-details',component:EventDetailsComponent,title:'Event Details - Harry'},
    {path:'job-details',component:JobDetailsComponent,title:'Job Details - Harry'},
    {path:'coming-soon',component:ComingSoonComponent,title:'Coming Soon - Harry'},
    {path:'faq',component:FaqComponent,title:'Faq - Harry'},
    {path:'search',component:SearchComponent,title:'Search - Harry'},
    {path:'policy',component:PolicyComponent,title:'Policy - Harry'},
    {path:'terms',component:TermsComponent,title:'Terms - Harry'},
    {path:'login',component:LoginComponent,title:'Login - Harry'},
    {path:'register',component:RegisterComponent,title:'Register - Harry'},
    {path:'forgot',component:ForgotComponent,title:'Forgot - Harry'},
    {path:'contact',component:ContactComponent,title:'Contact - Harry'},
    {path:'contact-two',component:ContactTwoComponent,title:'Contact Two - Harry'},
  ]},


  {path:'blog',component:BlogMasonryComponent,title:'Blog Masonry - Harry',children:[
    {path:'blog-standard',component:BlogStandardComponent,title:'Blog Standard - Harry'},
    {path:'blog-grid',component:BlogGridComponent,title:'Blog Grid - Harry'},
    {path:'blog-grid-two',component:BlogGridTwoComponent,title:'Blog Grid Two - Harry'},
    {path:'blog-grid-sidebar',component:BlogGridSidebarComponent,title:'Blog Grid Sidebar - Harry'},
    {path:'blog-masonry',component:BlogMasonryComponent,title:'Blog Masonry - Harry'},
    {path: 'blog-details/:slug', component: BlogDetailsComponent, title: 'Blog Details - Harry'},
    {path:'blog-details-two',component:BlogDetailsTwoComponent,title:'Blog Details Two - Harry'},
  ]},
  {path:'portfolio',children:[
    {path:'classic',component:PortfolioClassicComponent,title:'Portfolio Classic - Harry'},
    {path:'grid',component:PortfolioTwoComponent,title:'Portfolio Classic - Harry'},
    {path:'gallery',component:PortfolioGalleryComponent,title:'Portfolio Gallery - Harry'},
    {path:'masonry',component:PortfolioMasonryComponent,title:'Portfolio Masonry - Harry'},
    {path:'metro',component:PortfolioMetroComponent,title:'Portfolio Metro - Harry'},
    {path:'slider',component:PortfolioSliderComponent,title:'Portfolio Slider - Harry'},
    {path:'details',component:PortfolioDetailsComponent,title:'Portfolio Details - Harry'},
    {path:'details-list',component:PortfolioDetailsListComponent,title:'Portfolio Details List - Harry'},
    {path:'details-slider',component:PortfolioDetailsSliderComponent,title:'Portfolio Details Slider - Harry'},
    {path:'details-video',component:PortfolioDetailsVideoComponent,title:'Portfolio Details Video - Harry'},
  ]},
  {path:'**',component:NotFoundComponent,title:'Page Not Found - Harry'},
];
