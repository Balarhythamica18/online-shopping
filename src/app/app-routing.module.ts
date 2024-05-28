import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './header/nav-bar/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ViewCartComponent } from './header/nav-bar/view-cart/view-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CodComponent } from './header/nav-bar/view-cart/cod/cod.component';
import { OnlinePaymentComponent } from './header/nav-bar/view-cart/online-payment/online-payment.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './sign-in/login/login.component';
import { ResponseMessageComponent } from './header/nav-bar/contact/response-message/response-message.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {path:'view-cart', component:ViewCartComponent},
  {path:'product-list', component: ProductListComponent},
  {path:'cod', component:CodComponent},
  {path:'online-payment',component:OnlinePaymentComponent},
  {path:'home',component:HomeComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'login',component:LoginComponent},
  {path:'response-message', component:ResponseMessageComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// app-routing.module.ts

