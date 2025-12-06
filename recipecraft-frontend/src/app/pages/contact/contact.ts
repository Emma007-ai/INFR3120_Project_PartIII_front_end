import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      // show browser + Bootstrap validation
      (form.control as any).markAllAsTouched?.();
      return;
    }

    this.submitted = true;
    form.resetForm();
  }
}
