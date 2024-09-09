import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  constructor(private route: Router, private service:UserService) { }

  title = 'angular14';
  isMenuVisible = true;
  isAdmin = false;

  ngDoCheck(): void {
    const currentRoute = this.route.url
    if (currentRoute == '/login' || currentRoute == '/acess/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if(this.service.GetRole()=='admin') {
      this.isAdmin = true
    }else{
      this.isAdmin = false
    }
  }
}
