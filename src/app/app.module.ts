import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FilterPipe } from './helpers/filter.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserCartItemComponent } from './components/user-cart-item/user-cart-item.component'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    FilterPipe,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    UserCartComponent,
    UserCartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
