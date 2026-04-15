import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

import { Trip } from "../models/trip";
import { BROWSER_STORAGE } from "../storage";
import { User } from "../models/user";
import { AuthResponse } from "../models/auth-response";

@Injectable({
  providedIn: "root",
})
export class TripDataService {
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private apiBaseUrl = "http://localhost:3000/api/";
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public getTrips(): Promise<Trip[]> {
    return firstValueFrom(
      this.http.get<Trip[]>(`${this.apiBaseUrl}trips`)
    );
  }

  public getTrip(tripCode: string): Promise<Trip> {
    return firstValueFrom(
      this.http.get<Trip>(this.tripUrl + tripCode)
    );
  }

  public addTrip(formData: Trip): Promise<Trip> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.storage.getItem("travlr-token")}`,
    });

    return firstValueFrom(
      this.http.post<Trip>(this.tripUrl, formData, { headers })
    );
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.storage.getItem("travlr-token")}`,
    });

    return firstValueFrom(
      this.http.put<Trip>(this.tripUrl + formData.Code, formData, { headers })
    );
  }

  public deleteTrip(tripCode: string): Promise<any> {
  return firstValueFrom(
    this.http.delete(this.tripUrl + tripCode)
  );
}


  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("login", user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("register", user);
  }

  private makeAuthApiCall(
    urlPath: string,
    user: User
  ): Promise<AuthResponse> {
    const url = `${this.apiBaseUrl}${urlPath}`;

    return firstValueFrom(
      this.http.post<AuthResponse>(url, user)
    );
  }
}