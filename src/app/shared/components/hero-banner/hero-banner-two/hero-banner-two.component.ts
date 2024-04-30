import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgOptimizedImage } from '@angular/common'; // Import NgOptimizedImage

@Component({
  selector: 'app-hero-banner-two',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage ],
  templateUrl: './hero-banner-two.component.html',
  styleUrl: './hero-banner-two.component.scss'
})
export class HeroBannerTwoComponent {
  isMobile: boolean;

  constructor(private deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile();
  }
}
