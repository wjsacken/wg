import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import practice_data from '../../shared/data/practice-data';
import sal from 'sal.js';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ScholarshipFormComponent } from '../../shared/components/form/scolarship-form/scholarship-form.component';
@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderTwoComponent, FooterTwoComponent, ScholarshipFormComponent],
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.scss']
})
export class ScholarshipComponent implements AfterViewInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  public practice_data = [...practice_data].sort((a, b) => {
    // Use localeCompare for case-insensitive sorting
    return b.title.localeCompare(a.title);
  });

  ngOnInit() {
    this.titleService.setTitle('Adversity Scholarship | Wallace & Graham');

    // Dynamically set the meta description
    this.metaService.updateTag({
      name: 'description',
      content: 'W&G will be awarding a total of $15,000 to six deserving Rowan County high school seniors'
    });
  }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });

    this.initializeCountdown();
  }

  private initializeCountdown() {
    const countdownElement = document.querySelector('.novi-countdown') as HTMLElement;
    if (countdownElement) {
      const endTime = new Date(countdownElement.getAttribute('data-time') || '').getTime();
  
      const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
  
        if (timeLeft > 0) {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
          // Update the values for Days, Hours, Minutes, and Seconds
          const daysElement = countdownElement.querySelector('.countdown-section:nth-child(1) .countdown-amount');
          const hoursElement = countdownElement.querySelector('.countdown-section:nth-child(2) .countdown-amount');
          const minutesElement = countdownElement.querySelector('.countdown-section:nth-child(3) .countdown-amount');
          const secondsElement = countdownElement.querySelector('.countdown-section:nth-child(4) .countdown-amount');
  
          if (daysElement) daysElement.textContent = days.toString();
          if (hoursElement) hoursElement.textContent = hours.toString();
          if (minutesElement) minutesElement.textContent = minutes.toString();
          if (secondsElement) secondsElement.textContent = seconds.toString();
        } else {
          countdownElement.innerHTML = '<h4>Application deadline has passed</h4>';
        }
      };
  
      // Update the countdown every second
      setInterval(updateCountdown, 1000);
      updateCountdown(); // Initialize immediately
    }
  }
  
}
