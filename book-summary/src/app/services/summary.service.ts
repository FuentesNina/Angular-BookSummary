import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Summary } from 'src/app/Summary';
import { SUMMARIES } from 'src/app/mock-summaries';

import { MONGODB_KEY } from '../chapters';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private apiUrl = 'https://data.mongodb-api.com/app/data-wlkbk/endpoint/data/v1';

  constructor(private http:HttpClient) { }

  getSummaries(): Observable<string> {
    const url = `${this.apiUrl}/action/find`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': MONGODB_KEY,
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Origin': '*'
      })
    }

    const body = {
      'dataSource': 'Cluster0',
      'database': 'bookSummary',
      'collection': 'summaries',
    };

    return this.http.post<string>(url, body, httpOptions);
  }
}
