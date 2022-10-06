import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Base_url = "https://localhost:44342/api";

  constructor(private http : HttpClient) { }

  login(data:any){
    return this.http.post(`${this.Base_url}/auth` , data);
  }
}
