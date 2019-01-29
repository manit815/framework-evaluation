import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {   }

  postUserDetails(value) {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`,value);
 }
}