import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scholarship-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './scholarship-form.component.html',
  styleUrls: ['./scholarship-form.component.scss']
})
export class ScholarshipFormComponent implements OnInit {

  public contactForm!: FormGroup;
  public formSubmitted = false;

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      high_school: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      try {
        const formData = {
          formType: 'scholarship', // Specify the form type
          firstname: this.contactForm.value.firstname,
          lastname: this.contactForm.value.lastname,
          email: this.contactForm.value.email,
          phone: this.contactForm.value.phone,
          high_school: this.contactForm.value.high_school,
          message: this.contactForm.value.message
        };

        // Send form data to the Cloudflare Worker endpoint
        const response = await fetch('/api/submit-form', { // The Worker endpoint path
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
        this.formSubmitted = false;
      } catch (error) {
        console.error('An error occurred while submitting the form:', error);
        alert('An error occurred while submitting the form.');
      }
    }
  }

  get firstname() { return this.contactForm.get('firstname'); }
  get lastname() { return this.contactForm.get('lastname'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get high_school() { return this.contactForm.get('high_school'); }
  get message() { return this.contactForm.get('message'); }
}
