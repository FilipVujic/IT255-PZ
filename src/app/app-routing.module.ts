import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'shop', component: ProductListComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'about', component: AboutComponent},
    { path: '**', component: PageNotFoundComponent }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService
    ]
})
export class AppRoutingModule {

}