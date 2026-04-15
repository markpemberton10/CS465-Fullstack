import { Routes } from '@angular/router';

import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTrip } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list-trips', pathMatch: 'full' },

  { path: 'list-trips', component: TripListingComponent },

  { path: 'add-trip', component: EditTrip },

  { path: 'edit-trip/:tripCode', component: EditTrip },

  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: 'list-trips' }
];



