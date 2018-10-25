import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imported components for routes
import { HeroesComponent }      from './heroes/heroes.component';
import { BasketComponent }      from './basket/basket.component';
import { HomeComponent }      from './home/home.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'basket', component: BasketComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
