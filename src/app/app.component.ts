import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public router: Router) { 
    
  }
  title = 'tiny-tools';
  getRouteClass(route: string){
    if(route.includes(this.router.url)){
      return true;
    }
    return false;
  }
}
