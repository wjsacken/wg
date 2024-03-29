import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { RouterModule } from '@angular/router';
import team_data from '../../shared/data/team-data';
@Component({
  selector: 'app-team-classic',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,FooterSixComponent],
  templateUrl: './team-classic.component.html',
  styleUrl: './team-classic.component.scss'
})
export class TeamClassicComponent {

  public team_data = [...team_data].filter(t => t.page.includes('team'));
}
