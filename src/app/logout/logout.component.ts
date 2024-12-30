import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    // Clear user session, tokens, or any stored user info
    localStorage.clear(); // or sessionStorage.clear(); depending on your storage strategy

    // Optionally, redirect to the login page after 3 seconds
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 6000); // 3-second delay
  }

}
