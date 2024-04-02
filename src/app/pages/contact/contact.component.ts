import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { ContactFormComponent } from '../../shared/components/form/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,HeaderTwoComponent,ContactFormComponent,FooterTwoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  public location_data = [
    {
      title:'Call',
      icon:``,
      location:'704.633.5244',
      tel:'',
    },
    {
      title:'Fax',
      icon:``,
      location:'800.849.5291',
      tel:'',
    },
    {
      title:'Address',
      icon:``,
      location:'525 N. Main St., Salisbury NC, 28144',
      tel:'',
    }
  ];


}
