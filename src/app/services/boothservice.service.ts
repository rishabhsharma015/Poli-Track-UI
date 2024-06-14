import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchBoothForm } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class BoothserviceService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  // Get all booths
  getBoothListByStateAndVidhanSabha(form: SearchBoothForm): Observable<any>{
    let params = new HttpParams().set('state', form.state).set('vidhanSabha', form.vidhanSabha)
    return this.http.get(this.apiUrl, { params });
  }
}
