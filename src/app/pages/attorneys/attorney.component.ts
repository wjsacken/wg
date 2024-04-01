import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import attorney_data from '../../shared/data/attorney-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-attorney',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,FooterSixComponent],
  templateUrl: './attorney.component.html',
  styleUrl: './attorney.component.scss'
})
export class AttorneyComponent {

  public attorney_data = [...attorney_data].sort((a, b) => {
    // Use localeCompare for case-insensitive sorting
    return b.title.localeCompare(a.title);
  });

}
