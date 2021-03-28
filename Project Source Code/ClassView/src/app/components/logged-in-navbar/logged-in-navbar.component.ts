import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrls: ['./logged-in-navbar.component.css']
})
export class LoggedInNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    location.reload()

  }

}
