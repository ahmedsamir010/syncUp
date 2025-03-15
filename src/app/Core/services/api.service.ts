import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { api } from '../../../../public/assets/apiConfig';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl: string = api.baseUrl;

  constructor(private http: HttpClient) {}
  get<T>(endpoint: string): Observable<T> {
    return this.http
      .get<{ data: T }>(`${this.baseUrl}/${endpoint}`)
      .pipe(map((res) => res.data));
  }

  add(endpoint: string, data: any) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }

  update(endpoint: string, data: any,id:number) {
    return this.http.put(`${this.baseUrl}/${endpoint}/${id}`, data);
  }

  delete(endpoint: string, id: number) {
    return this.http.delete(`${this.baseUrl}/${endpoint}/${id}`);
  }

  getById<T>(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
  }
}
