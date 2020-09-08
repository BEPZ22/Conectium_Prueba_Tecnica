import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserHService {

  private _userUrl = "http://localhost:3000/api/user/get"
  
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<any>(this._userUrl)
  }
}
