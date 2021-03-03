import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrls: ['./logged-in-navbar.component.css']
})
export class LoggedInNavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
