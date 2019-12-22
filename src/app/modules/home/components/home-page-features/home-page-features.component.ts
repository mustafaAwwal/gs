import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-features',
  templateUrl: './home-page-features.component.html',
  styleUrls: ['./home-page-features.component.scss']
})
export class HomePageFeaturesComponent implements OnInit {
  featureCardData = [
    {
      image: '../../../../../assets/slicings/features-users.png',
      text: 'Separate user-friendly portals for recyclers, producers and Government.'
    },
    {
      image: '../../../../../assets/slicings/features-credit-card.png',
      text: 'All transactions are recorded on 28 nodes in the optimized system.'
    },
    {
      image: '../../../../../assets/slicings/features-world.png',
      text: 'One globally scalable solution to produce a seamless experience for every entity.'
    },
    {
      image: '../../../../../assets/slicings/features-cogs.png',
      text: 'Leveraging Hyperledger Fabric to provide a stable and credible compliance tool.'
    },
    {
      image: '../../../../../assets/slicings/features-shield.png',
      text: 'Only authorized parties will be able to view the process flow.'
    },
    {
      image: '../../../../../assets/slicings/features-coins.png',
      text: 'Provide white label solutions to boost your revenue.'
    },
    {
      image: '../../../../../assets/slicings/feaatures-industry.png',
      text: 'Help Industries in achieving their SDGs goals.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
