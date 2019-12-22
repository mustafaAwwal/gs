import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll',['$event'])
  classChanger(event) {
    if(window.scrollY > 0){
      this.scrollChangeClass = true;
    }  
    else {
      this.scrollChangeClass = false;
    }
  }
  scrollChangeClass = false;
  constructor() { }

  ngOnInit() {
  }
  goToOffers() {
    let el = document.getElementById('home-page-offers')
    console.log(el.scrollTop)
  }
}
