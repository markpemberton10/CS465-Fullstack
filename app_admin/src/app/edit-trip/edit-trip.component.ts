import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip {

  editTripFormGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.editTripFormGroup = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
deleteTrip(): void {
  console.log('Delete clicked');
}
  get f() {
    return this.editTripFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.editTripFormGroup.invalid) {
      return;
    }

    console.log('Trip Saved:', this.editTripFormGroup.value);
  }
}