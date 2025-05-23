import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  public contactForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.contactForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      phone:new FormControl(null,Validators.required),
      practice_area:new FormControl(null,Validators.required),
      message:new FormControl(null,Validators.required),
    })
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      try {
        const formData = {
          Name: this.contactForm.value.name,
          Email: this.contactForm.value.email,
          Phone: this.contactForm.value.phone,
          Practice_area: this.contactForm.value.practice_area,
          Message: this.contactForm.value.message
        };

        const response = await fetch('https://webhook.site/WallaceGraham', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Failed to submit form data');
        }

        alert('Form submitted successfully!');
        // Reset the form
        this.contactForm.reset();
        this.formSubmitted = false; // Reset formSubmitted to false
      } catch (error) {
        console.error('An error occurred while submitting the form:', error);
        alert('An error occurred while submitting the form: ');
      }
    }
  }



  get name() { return this.contactForm.get('name') }
  get email() { return this.contactForm.get('email') }
  get phone() { return this.contactForm.get('phone') }
  get practice_area() { return this.contactForm.get('practice_area')}
  get message() { return this.contactForm.get('message') }
}
