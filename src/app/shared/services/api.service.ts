import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL: string = "http://h2871695.stratoserver.net:8085";
  private localApiURL: string = "http://localhost:8085";

  constructor(private http: HttpClient) {}

  public get<Any>(uri: string, params: HttpParams) {
    return this.http.get<Any>(this.localApiURL + uri, { params });
  }

  public post<Any>(uri: string, data: Object) {
    return this.http.post(this.localApiURL + uri, data);
  }

  public delete<Any>(uri: string, data: Object){
    return this.http.delete(this.localApiURL + uri, data);
  }
}
