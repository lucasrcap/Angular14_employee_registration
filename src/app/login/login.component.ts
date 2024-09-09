import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material-module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }
  respdata: any;

  ProceedLogin(logindata: any) {
    if (logindata.valid) {
      // this.service.ProceedLogin(logindata.value).subscribe(item => {
      //   this.respdata = item
      //   if (this.respdata!= null) {
      //     localStorage.setItem('token', this.respdata.jwtToken)
      //     this.route.navigate(['home'])

      //   } else {
      //     alert("Login failed")
      //   }
      // }, error => {
      //   alert("Login failed")
      // })
      this.service.ProceedLogin(logindata.value).subscribe({
        next: item => {
          this.respdata = item
          if (this.respdata != null) {
            localStorage.setItem('token', this.respdata.jwtToken)
            this.route.navigate(['home'])
          } else {
            alertify.error("Login failed")
          }
        },
        error: err => alertify.error("Login failed")
      });
    }
  }

  RedirectRegister() {
    this.route.navigate(['acess/register'])
  }

}
