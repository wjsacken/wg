// src/app/lawyer-form/lawyer-form.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lawyer-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './lawyer-form.component.html',
  styleUrls: ['./lawyer-form.component.scss']
})
export class LawyerFormComponent implements OnInit {

  public contactForm!: FormGroup;
  public formSubmitted = false;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      practice_area: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      try {
        const formData = {
          formType: 'lawyer', // Specify the form type
          firstname: this.contactForm.value.name,
          email: this.contactForm.value.email,
          phone: this.contactForm.value.phone,
          practice_area: this.contactForm.value.practice_area,
          message: this.contactForm.value.message
        };
  
        // Send form data to the Cloudflare Worker endpoint
        const response = await fetch('/api/submit-form', {
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
  

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get practice_area() { return this.contactForm.get('practice_area'); }
  get message() { return this.contactForm.get('message'); }
}
