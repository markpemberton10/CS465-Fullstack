import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip {

  addTripFormGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.addTripFormGroup = this.fb.group({
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

  get f() {
    return this.addTripFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.addTripFormGroup.invalid) {
      return;
    }

    console.log('Trip Saved:', this.addTripFormGroup.value);
  }
}