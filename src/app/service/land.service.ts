import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LandEntry } from '../models/land-entry.model';

@Injectable({ providedIn: 'root' })
export class LandService {
  constructor(private http: HttpClient) {}

  getEntries(): Observable<LandEntry[]> {
    return this.http.get<LandEntry[]>('/api/lands');
  }

  createEntry(entry: LandEntry): Observable<any> {
    return this.http.post('/api/lands', entry);
  }

  updateEntry(entry: LandEntry): Observable<any> {
    return this.http.put(`/api/lands/${entry.id}`, entry);
  }
}
