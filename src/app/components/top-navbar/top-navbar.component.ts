import { SharedService } from './../shared/shared.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent {
  imageEnter: boolean = false;
  constructor(private router: Router) {}

  onImageEnter(): void {
    this.imageEnter = true;
  }

  onImageLeave(): void {
    this.imageEnter = false;
  }

  onMouseDown(): void {
    this.router.navigate(['']);
  }
}
