import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BringRegistersService {

constructor(public _http: HttpClient) {}
 
GetAllRegistersFromServer():Observable<User[]>{
  let url:string="https://localhost:44304/api/signUp/Get";
  return (this._http.get<User[]>(url));
}
}
