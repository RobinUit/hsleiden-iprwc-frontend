import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  public get<Any>(uri: string, params: HttpParams) {
    return this.http.get<Any>(this.apiURL + uri, { params });
  }

  public post<Any>(uri: string, data: Object) {
    return this.http.post(this.apiURL + uri, data);
  }

  public delete<Any>(uri: string, data: Object){
    return this.http.delete(this.apiURL + uri, data);
  }
}
