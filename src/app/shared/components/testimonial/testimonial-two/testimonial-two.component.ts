import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();

@Component({
  selector: 'app-testimonial-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-two.component.html',
  styleUrl: './testimonial-two.component.scss'
})
export class TestimonialTwoComponent {

  testimonial_data = [
    {
      ratings: [1, 2, 3, 4, 5],
      name: "Sherry Crooke",
      desc: "<p>Dad and I would like to express our thanks and appreciation for representing us in Mom’s workers’ compensation case.&nbsp; Your courtesy, kindness and professionalism was always displayed to us in all interactions with your firm.&nbsp; Amanda did a terrific job in keeping me informed and up to date through all emails and phone conversations.&nbsp;</p><p>Working with your firm throughout this whole process was a pleasure and without reservation would highly recommend Wallace and Graham to anyone needing legal services.</p><p>Sincerely,</p><p>Sherry Crooke, Daughter of Margie Ruth Cooper</p>",
  },

  {
      ratings: [1, 2, 3, 4, 5],
      name: "Thomas",
      desc: "<p>Wallace &amp; Graham have worked very hard for me on my hearing loss case. Mark and Frieda have done their homework and helped me win this case. It has not been easy or quick. Mark assured me that we had a good case, and that we would win. I am very satisfied with my attorney he dug deep and hit them hard – where it hurts. I know he had some trying times with Domtar’s lawyer and the industrial commission. I could not had made it without you. Thank you very much Mark and Frieda.</p>",
  },
    {
      ratings: [1, 2, 3, 4, 5],
      name: "William Smith",
      desc: "<p>I know I am dying.&nbsp; I &nbsp;have been up since 3 am because I am so sick.&nbsp; But I want you to know that Trish and everyone at Wallace &amp; Graham have been excellent and you are amazing people.&nbsp; I appreciate everything you have done.<u></u><u></u></p><p>I can never thank you enough and for what little life I have left, I always be indebted to your firm.</p>",
  },
  {
      ratings: [1, 2, 3, 4, 5],
      name: "William T. Poteat",
      desc: "Thank you all so much for all you do.&nbsp; The endless hours and research that was put forth in the handling of my workers’ compensation claim and the communication was very constant.&nbsp; I am impressed with the Wallace and Graham firm.&nbsp; I would like to extend a special thank you to Amanda Norton.",
  },
  ]

  ngOnInit(): void {
    // testimonial slider active
    new Swiper('.testimonial__slider-active-4', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".testimonial-slider-dot-4",
        clickable: true,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 1,
        },
        '992': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 1,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".testimonial-4-button-next",
        prevEl: ".testimonial-4-button-prev",
      },
    });
  }
}
