import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.shrtco.de/v2/shorten';
  constructor(private http: HttpClient) {}

  getShortenedUrl(url: string) {
    return this.http.get(`${this.baseUrl}?url=${url}`);
  }
}
