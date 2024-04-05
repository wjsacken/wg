import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import practice_data from '../../shared/data/practice-data';
import sal from 'sal.js';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,FooterTwoComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
    constructor(
      private titleService: Title, 
      private metaService: Meta
    ){}
    public practice_data = [...practice_data].sort((a, b) => {
      // Use localeCompare for case-insensitive sorting
      return b.title.localeCompare(a.title);
    });
  ngOnInit(){
        
    this.titleService.setTitle('Areas of Law that we practice | Wallace & Graham');

    // Dynamically set the meta description
    this.metaService.updateTag({ name: 'description', content: 'Our firm practices a wide array of injury, disease, death, consumer, and environmental tort claims. We investigate the wrongful conduct of companies and the insurance industry. We aim to help our clients in any way possible' });
  }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
