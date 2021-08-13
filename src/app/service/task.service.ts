import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // api: string = 'https://api.openbrewerydb.org/';
  api: string = 'https://reqres.in/';
  constructor( private http: HttpClient,) { }
  // getusers()
  // {
  //   return this.http.get(this.api+'breweries?by_name=cooper');
  // }
  getusers()
  {
    return this.http.get(this.api+'api/users/1');
  }
  getuser()
  {
    return this.http.get(this.api+'api/users/3');
  }
}
