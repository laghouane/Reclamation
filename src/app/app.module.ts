import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddReclamationComponent } from './Reclamation/add-reclamation/add-reclamation.component';
import { UpdateReclamationComponent } from './Reclamation/update-reclamation/update-reclamation.component';
import { AccountComponent } from './account/account.component';
import { MyReclamationComponent } from './Reclamation/my-reclamation/my-reclamation.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AllUserComponent } from './user/all-user/all-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    AddReclamationComponent,
    UpdateReclamationComponent,
    AccountComponent,
    MyReclamationComponent,
    AddUserComponent,
    AllUserComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
       //allowedDomains: ['example.com'], // Liste des domaines autorisés (si nécessaire)
       // disallowedRoutes: ['example.com/login'] // Liste des routes exclues (si nécessaire)
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
