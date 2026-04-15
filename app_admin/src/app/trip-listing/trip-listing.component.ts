import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {

  trips: Trip[] = [];
  message = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  // 🔥 CENTRALIZED LOAD FUNCTION
  loadTrips(): void {
  this.tripDataService.getTrips()
    .then((value: Trip[]) => {
      this.trips = value;

      this.message = value.length > 0
        ? `There are ${value.length} trips available.`
        : 'No trips retrieved from database';

      console.log(this.message);
    })
    .catch((error: any) => {
      console.log('Error:', error);
    });
}

  // 🔥 ADD TRIP NAVIGATION
  addTrip(): void {
    this.router.navigate(['add-trip']).then(() => {
      // refresh after navigation returns
      this.loadTrips();
    });
  }

  // 🔥 REFRESH AFTER ANY ACTION
  refresh(): void {
    this.loadTrips();
  }
}