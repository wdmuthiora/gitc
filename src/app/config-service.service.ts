import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Item } from './item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigServiceService {
  private apiServerUrl = environment.apiBaseUrl;
  private token = environment.bearerToken;

  httpOptions = {
    headers: new HttpHeaders()
      .set('Access-Control-Allow-Headers', 'true')
      .set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      )
      .set('Authorization', this.token)
      .set('Access-Control-Allow-Origin', '*')
      .set(
        'Access-Control-Allow-Methods',
        'GET, PUT, POST, DELETE, PATCH, OPTIONS'
      )
      .set('Content-Security-Policy', 'upgrade-insecure-requests'),
  };

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Item[]> {
    return this.http.get<Item[]>(
      `${this.apiServerUrl}/items`,
      this.httpOptions
    );
  }
}
