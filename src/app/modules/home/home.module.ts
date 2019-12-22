import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { HomePageJumbotronComponent } from './components/home-page-jumbotron/home-page-jumbotron.component';
import { HomePageOffersComponent } from './components/home-page-offers/home-page-offers.component';
import { HomePageAboutComponent } from './components/home-page-about/home-page-about.component';
import { HomePageFeaturesComponent } from './components/home-page-features/home-page-features.component';
import { HomePageStartedComponent } from './components/home-page-started/home-page-started.component';
import { HomePageContactUsComponent } from './components/home-page-contact-us/home-page-contact-us.component';
import { HomePageFooterComponent } from './components/home-page-footer/home-page-footer.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';



@NgModule({
  declarations: [HomePageComponent, HomePageJumbotronComponent, HomePageOffersComponent, HomePageAboutComponent, HomePageFeaturesComponent, HomePageStartedComponent, HomePageContactUsComponent, HomePageFooterComponent, OfferCardComponent, FeatureCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    MaterialModule
  ]
})
export class HomeModule { }
