import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shareable/components/login/login.component';
import { RegistrationComponent } from './shareable/components/registration/registration.component';
import { HomeComponent } from './shareable/components/home/home.component';
import { CardComponent } from './shareable/components/card/card.component';
import { DetailsComponent } from './shareable/components/details/details.component';
import { PagenotfoundComponent } from './shareable/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '' , component : LoginComponent},
  {path: 'registration' , component : RegistrationComponent},
  {path: 'home' , component : HomeComponent, children : [
    {path: '' , component : CardComponent},
  {path: 'details' , component : DetailsComponent},
  ]},
  {path: '**' , component : PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
