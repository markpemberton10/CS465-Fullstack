import { Routes } from '@angular/router';

import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list-trips', pathMatch: 'full' },
  { path: 'edit-trip', component: EditTrip},
  { path: 'list-trips', component: TripListingComponent },
  { path: 'add-trip', component: AddTrip },
 

  { path: '**', redirectTo: 'list-trips' }
];