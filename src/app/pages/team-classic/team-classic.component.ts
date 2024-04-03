import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { RouterModule } from '@angular/router';
import team_data from '../../shared/data/team-data';
@Component({
  selector: 'app-team-classic',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,FooterTwoComponent],
  templateUrl: './team-classic.component.html',
  styleUrl: './team-classic.component.scss'
})
export class TeamClassicComponent {

  public team_data = [...team_data].filter(t => t.page.includes('team'));
}
