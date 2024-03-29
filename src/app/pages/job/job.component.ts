import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import practice_data from '../../shared/data/practice-data';
import sal from 'sal.js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,FooterTwoComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

    public practice_data = [...practice_data].sort((a, b) => {
      // Use localeCompare for case-insensitive sorting
      return b.title.localeCompare(a.title);
    });


  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
