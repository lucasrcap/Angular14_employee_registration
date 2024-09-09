import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  ProceedLogin(inputdata: any) {
    return this.http.post('https://localhost:7145/User/Authenticate', inputdata)//na CostumerAPI era 7192, na userMaster 7145
  }

  IsLoogedIn() {
    this.GetRole()
    return localStorage.getItem('token') != null
  }

  GetToken() {
    return localStorage.getItem('token') != null ? localStorage.getItem('token') : ''
  }

  Registration(inputdata: any) {
    return this.http.post('https://localhost:7145/User/Register', inputdata)//na CostumerAPI era 7192, na userMaster 7145
  }

  GetRole() {
    var token = localStorage.getItem('token')
    if (token != null) {
      var extractdata = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
      return extractdata.role
    }else{
      return ''
    }
  }
}
