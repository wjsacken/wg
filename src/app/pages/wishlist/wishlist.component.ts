import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwelveComponent } from '../../shared/header/header-twelve/header-twelve.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { CommonBreadcrumbComponent } from '../../shared/components/breadcrumb/common-breadcrumb/common-breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwelveComponent,CommonBreadcrumbComponent,FooterSixComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})

export class WishlistComponent {

  value = 1;

  increment() {
    this.value++;
  }
  decrement() {
    if (this.value > 1) {
      this.value--;
    }
  }
}
