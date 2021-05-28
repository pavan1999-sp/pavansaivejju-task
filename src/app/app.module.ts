import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenupageComponent } from './menupage/menupage.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceitemComponent } from './pages/home/serviceitem/serviceitem.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetails } from './pages/home/details/bookdetails.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenupageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceitemComponent,
BookDetails
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
