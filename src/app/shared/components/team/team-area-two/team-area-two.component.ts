import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import attorney_data from '../../../data/attorney-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-area-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team-area-two.component.html',
  styleUrl: './team-area-two.component.scss'
})
export class TeamAreaTwoComponent {
  public teams = [...attorney_data];
}
