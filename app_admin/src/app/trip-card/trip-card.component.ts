import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {

  @Input() trip!: Trip;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public editTrip(trip: Trip) {
    localStorage.setItem('tripCode', trip.tripCode);
    this.router.navigate(['edit-trip']);
  }
}
