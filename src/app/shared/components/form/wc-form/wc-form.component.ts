import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './wc-form.component.html',
  styleUrls: ['./wc-form.component.scss']
})
export class WcFormComponent implements OnInit {

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
          firstname: this.contactForm.value.name,
          email: this.contactForm.value.email,
          phone: this.contactForm.value.phone,
          practice_area: this.contactForm.value.practice_area,
          message: this.contactForm.value.message
        };

        // Replace 'https://your-cloudflare-worker-domain.workers.dev' with your actual Worker URL
        const workerUrl = '/api/submit-form'; // Assuming the Worker is deployed as a function under /api

        const response = await fetch(workerUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to submit form data: ${errorText}`);
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
