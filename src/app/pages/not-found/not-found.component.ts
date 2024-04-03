import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,FooterTwoComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
