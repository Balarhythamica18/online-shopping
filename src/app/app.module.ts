import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ContactComponent } from './header/nav-bar/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ViewCartComponent } from './header/nav-bar/view-cart/view-cart.component';
import { FormsModule } from '@angular/forms';
import { CartService } from './cart.service';
import { OnlinePaymentComponent } from './header/nav-bar/view-cart/online-payment/online-payment.component';
import { CodComponent } from './header/nav-bar/view-cart/cod/cod.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './sign-in/login/login.component';
import { OfferComponent } from './product-list/offer/offer.component';
import { SearchComponent } from './product-list/search/search.component';
import { ResponseMessageComponent } from './header/nav-bar/contact/response-message/response-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    TopHeaderComponent,
    NavBarComponent,
    ContactComponent,
    HomeComponent,
    ViewCartComponent,
    OnlinePaymentComponent,
    CodComponent,
    SignInComponent,
    LoginComponent,
    OfferComponent,
    SearchComponent,
    ResponseMessageComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  
  ],
  providers: [CartService],
  bootstrap: [AppComponent,NavBarComponent]
})
export class AppModule { }
