import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from '../services/trip-data.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
) { }

public getToken(): string | null {
    return this.storage.getItem('travlr-token');
}

public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
}

public login(user: User): Promise<void> {
    return this.tripDataService.login(user)
        .then((authResp: AuthResponse) => this.saveToken(authResp.token));
}

public register(user: User): Promise<void> {
    return this.tripDataService.register(user)
        .then((authResp: AuthResponse) => this.saveToken(authResp.token));
}

public logout(): void {
    this.storage.removeItem('travlr-token');
}

private getPayload(token: string): any {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch {
        return null;
    }
}

public isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const payload = this.getPayload(token);
    if (!payload) return false;

    return payload.exp > Date.now() / 1000;
}

public getCurrentUser(): User | null {
    if (!this.isLoggedIn()) return null;

    const token = this.getToken();
    if (!token) return null;

    const { email, name } = this.getPayload(token);
    return { email, name } as User;
}
}