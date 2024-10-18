import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LawyerFormComponent } from '../../form/lawyer-form/lawyer-form.component';

@Component({
  selector: 'app-personal-port-contact',
  standalone: true,
  imports: [CommonModule,LawyerFormComponent],
  templateUrl: './personal-port-contact.component.html',
  styleUrl: './personal-port-contact.component.scss'
})
export class PersonalPortContactComponent {

}
