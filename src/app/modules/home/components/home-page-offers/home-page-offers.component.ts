import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-offers',
  templateUrl: './home-page-offers.component.html',
  styleUrls: ['./home-page-offers.component.scss']
})
export class HomePageOffersComponent implements OnInit {
  offerCardData = [
    {
      heading: 'Tracking',
      text: 'Provides a complete trail from contract phase to completion of recycling and generation of Green',
      image: '../../../../../assets/slicings/offer-map.png'
    },
    {
      heading: 'Transparency',
      text: 'Provides a complete trail of material from contract phase to recycling of output through legitimate',
      image: '../../../../../assets/slicings/offer-two-circle.png'
    },
    {
      heading: 'Technology',
      text: 'Use of Blockchain technology to provide a stable and credible monitoring tool thereby prevent',
      image: '../../../../../assets/slicings/offer-spiral-technology.png'
    },
    {
      heading: 'Producer',
      text: 'Take advantages of money saving deals by discovering variety of goods and services near to you.',
      image: '../../../../../assets/slicings/offer-chair.png'
    },
    {
      heading: 'Recycler',
      text: 'Any entity possessing material which is required to be destructed and/or recycled. Recycler',
      image: '../../../../../assets/slicings/offer-network.png'
    },
    {
      heading: 'Municipality',
      text: 'Regulatory body resposible to ensure legitimate destruction and recycling through government',
      image: '../../../../../assets/slicings/offer-rocks.png'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
