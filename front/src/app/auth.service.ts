import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/user/register"
  private _loginUrl = "http://localhost:3000/api/auth/login"
  private _checkUrl = "http://localhost:3000/api/auth/check"

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(login){
    return this.http.post<any>(this._loginUrl,login)
  }

  loggedIn(){
    return this.http.get<any>(this._checkUrl)
  }
}
