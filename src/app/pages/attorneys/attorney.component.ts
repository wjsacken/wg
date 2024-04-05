import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import attorney_data from '../../shared/data/attorney-data';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-attorney',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,FooterTwoComponent],
  templateUrl: './attorney.component.html',
  styleUrl: './attorney.component.scss'
})
export class AttorneyComponent {
  constructor (
    private titleService: Title, 
    private metaService: Meta
  ){}
  public attorney_data = [...attorney_data].sort((a, b) => {
    // Use localeCompare for case-insensitive sorting
    return b.title.localeCompare(a.title);
  });

  ngOnINit(){
    this.titleService.setTitle('Experienced Attorneys in North Carolina | Wallace &amp; Graham');

    // Dynamically set the meta description
    this.metaService.updateTag({ name: 'description', content: 'Wallace &amp; Graham welcomes new attorneys to our team of experienced lawyers serving clients in North Carolina. Contact us for expert legal representation.' });
  }

}
