import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http : HttpClient) { }

  booklist():Observable<any>{
    return this.http.get<any[]>('https://localhost:44342/api/book');
  }


}
