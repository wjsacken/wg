import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-lawyer-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './lawyer-form.component.html',
  styleUrl: './lawyer-form.component.scss'
})
export class LawyerFormComponent {

  public contactForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.contactForm = new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      phone:new FormControl(null,Validators.required),
      message:new FormControl(null,Validators.required),
    })
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      try {
        const formData = {
          FirstName: this.contactForm.value.firstName,
          LastName: this.contactForm.value.lastName,
          Email: this.contactForm.value.email,
          Phone: this.contactForm.value.phone,
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


  get firstName() { return this.contactForm.get('firstName') }
  get lastName() { return this.contactForm.get('lastName') }
  get email() { return this.contactForm.get('email') }
  get phone() { return this.contactForm.get('phone') }
  get message() { return this.contactForm.get('message') }

}
