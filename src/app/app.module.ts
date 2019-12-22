import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { MaterialModule } from './shared/modules/material/material.module';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
