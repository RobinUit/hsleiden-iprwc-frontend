import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public get<Any>(uri: string, params: HttpParams) {
    // const header = AuthorizationService.header;
    return this.http.get<Any>(uri, { params });
  }

  // public post<Any>(uri: string, data: Object) {
  //   // const header = AuthorizationService.header;
  //   return this.http.post(uri, data, {headers: header});
  // }

  // public delete<Any>(uri: string, data: Object){
  //   // const header = AuthorizationService.header;
  //   return this.http.delete(uri, data);
  // }
}
