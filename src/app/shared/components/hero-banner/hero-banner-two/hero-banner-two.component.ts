import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'; // Import NgOptimizedImage


@Component({
  selector: 'app-hero-banner-two',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage ],
  templateUrl: './hero-banner-two.component.html',
  styleUrl: './hero-banner-two.component.scss'
})
export class HeroBannerTwoComponent {
  imageUrl: string = 'https://imagedelivery.net/N7RaiyPSCRCLRce1-vDkeg/be5b6665-7d00-4a2c-c1b4-eb4850229300/partners';

}
