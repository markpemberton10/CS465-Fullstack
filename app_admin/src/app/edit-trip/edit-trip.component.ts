import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.css']
})
export class EditTrip implements OnInit {

  editTripFormGroup: FormGroup;
  submitted = false;
  isNew = true;
  tripCode: string | null = null;

  constructor(
    private fb: FormBuilder,
    private tripService: TripDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {

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

  ngOnInit(): void {
    this.tripCode = this.route.snapshot.paramMap.get('tripCode');

    if (this.tripCode) {
      this.isNew = false;

      this.tripService.getTrip(this.tripCode)
        .then((trip) => {
          this.editTripFormGroup.patchValue(trip);
        })
        .catch((err) => {
          console.error('Error loading trip:', err);
        });
    }
  }

  get f() {
    return this.editTripFormGroup.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.editTripFormGroup.invalid) {
      return;
    }

    const trip = this.editTripFormGroup.value;

    // CREATE MODE
    if (this.isNew) {
      this.tripService.addTrip(trip)
        .then((result) => {
          console.log('Trip created:', result);
          this.router.navigate(['/list-trips']);
        })
        .catch((err) => {
          console.error('Create error:', err);
        });
    }

    // UPDATE MODE
    else {
      this.tripService.updateTrip(trip)
        .then((result) => {
          console.log('Trip updated:', result);
          this.router.navigate(['/list-trips']);
        })
        .catch((err) => {
          console.error('Update error:', err);
        });
    }
  }

  deleteTrip(): void {
    if (!this.tripCode) return;

    this.tripService.deleteTrip(this.tripCode)
      .then(() => {
        console.log('Trip deleted');
        this.router.navigate(['/list-trips']);
      })
      .catch((err) => {
        console.error('Delete error:', err);
      });
  }
}