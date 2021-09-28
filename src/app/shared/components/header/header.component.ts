
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar class="main-header" color="primary">
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <span class="example-spacer"></span>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      
      <span> NOTICIAS CHIDAS</span>
    </mat-toolbar-row> 
    
    
  </mat-toolbar>`,
  
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
