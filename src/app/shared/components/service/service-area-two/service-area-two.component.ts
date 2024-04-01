import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import practice_data from '../../../data/practice-data';

@Component({
  selector: 'app-service-area-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './service-area-two.component.html',
  styleUrl: './service-area-two.component.scss'
})
export class ServiceAreaTwoComponent {

  constructor(private sanitizer: DomSanitizer) {}
  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  public practice_data = [...practice_data].sort((a, b) => {
      // Use localeCompare for case-insensitive sorting
      return b.title.localeCompare(a.title);
    });
    
}
