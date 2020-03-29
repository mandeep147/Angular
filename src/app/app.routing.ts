import {RouterModule, Routes} from "@angular/router";
import {ShopAppComponent} from "./shop-app/shop.component";
import {NgModule} from "@angular/core";
import {AboutComponent} from "./shop-app/about/about.component";
import {ContactComponent} from "./shop-app/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop'
  },
  {
    path: 'shop',
    component: ShopAppComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
