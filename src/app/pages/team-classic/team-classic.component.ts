import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { RouterModule } from '@angular/router';
import team_data from '../../shared/data/team-data';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-team-classic',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,FooterTwoComponent],
  templateUrl: './team-classic.component.html',
  styleUrl: './team-classic.component.scss'
})
export class TeamClassicComponent {
  constructor(
    private titleService: Title, 
    private metaService: Meta
  ){}
  public team_data = [...team_data].filter(t => t.page.includes('team'));
  ngOnInit(){
    this.titleService.setTitle('Directory of our Team in North Carolina | Wallace & Graham');

    // Dynamically set the meta description
    this.metaService.updateTag({ name: 'description', content: 'Wallace & Graham provides a directory of experienced legal professionals serving clients in North Carolina. Contact us for expert legal representation.' });
  }
}
