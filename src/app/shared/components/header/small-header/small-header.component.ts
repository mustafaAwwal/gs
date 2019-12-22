import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-header',
  templateUrl: './small-header.component.html',
  styleUrls: ['./small-header.component.scss']
})
export class SmallHeaderComponent implements OnInit {
  visibleState = false;
  constructor() { }

  ngOnInit() {
  }
  visibleStateChanger() {
    this.visibleState = !this.visibleState;
  }
}
