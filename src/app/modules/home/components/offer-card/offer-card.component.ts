import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {
  @Input() offerCardData: any;
  constructor() { }

  ngOnInit() {
  }

}
