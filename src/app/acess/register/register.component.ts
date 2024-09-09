import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }
  respdata: any

  RedirectLogin() {
    this.router.navigate(['login'])
  }
  reactiveForm = new FormGroup({
    userid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
  })
  SaveUser() {
    if (this.reactiveForm.valid) {
      this.service.Registration(this.reactiveForm.value).subscribe(item => {
        this.respdata = item
        if(this.respdata.result=='pass'){
          alertify.success("register was a sucess, please contact admin for activation")
          this.RedirectLogin()
        }else{
          alertify.error('failed, try again')
        }
      })
    }
  }

}
