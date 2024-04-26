import { Routes } from '@angular/router';
import { HomeLawyerComponent } from '../home/home-lawyer.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { BlogGridSidebarComponent } from '../blog/blog-grid-sidebar/blog-grid-sidebar.component';
import { BlogDetailsComponent } from '../blog/blog-details/blog-details.component';
import { PortfolioTwoComponent } from '../portfolio/portfolio-two/portfolio-two.component';
import { PortfolioDetailsComponent } from '../portfolio/portfolio-details/portfolio-details.component';
import { AboutComponent } from '../pages/about/about.component';
import { AboutMeComponent } from '../pages/about-me/about-me.component';
import { TeamClassicComponent } from '../pages/team-classic/team-classic.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { TermsComponent } from '../pages/terms/terms.component';
import { PolicyComponent } from '../pages/policy/policy.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { JobDetailsComponent } from '../pages/job-details/job-details.component';
import { JobComponent } from '../pages/job/job.component';
import { AttorneyComponent } from '../pages/attorneys/attorney.component';
import { AttorneyDetailsComponent } from '../pages/attorney-details/attorney-details.component';
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
  { path: 'new-blog', component: BlogGridSidebarComponent, data: { title: 'Blog - Wallace & Graham' } },
  { path: ':slug', component: BlogDetailsComponent, data: { title: 'Blog Title' } },

  {path:'pages',children:[
    {path:'policy',component:PolicyComponent,title:'Policy - Wallace & Graham'},
    {path:'terms',component:TermsComponent,title:'Terms - Wallace & Graham'},
  ]},
  {path:'**',component:NotFoundComponent,title:'Page Not Found - Wallace & Graham'},
];
