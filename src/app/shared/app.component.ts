import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import sal from 'sal.js';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BackToTopComponent],
  templateUrl: '../app.component.html',
  styleUrl: '../app.component.scss'
})

export class AppComponent {
  title = 'Wallace & Graham';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }


}
