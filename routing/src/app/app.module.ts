import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './shareable/components/registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './shareable/components/login/login.component';
import { NavbarComponent } from './shareable/components/navbar/navbar.component';
import { SidebarComponent } from './shareable/components/sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './shareable/components/card/card.component';
import { HomeComponent } from './shareable/components/home/home.component';
import { DetailsComponent } from './shareable/components/details/details.component';
import { PagenotfoundComponent } from './shareable/components/pagenotfound/pagenotfound.component';
import { StoragemanagementService } from './services/storagemanagement.service';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    HomeComponent,
    DetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,   
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
    
  ],
  providers: [StoragemanagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
