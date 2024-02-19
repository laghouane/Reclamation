import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateReclamationComponent } from './Reclamation/update-reclamation/update-reclamation.component';
import { MyReclamationComponent } from './Reclamation/my-reclamation/my-reclamation.component';
import { AddReclamationComponent } from './Reclamation/add-reclamation/add-reclamation.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AllUserComponent } from './user/all-user/all-user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '' , redirectTo:'/home', pathMatch: 'full'},
  {path: 'reclamations' , component :MyReclamationComponent},
  {path: 'reclamations/:id' , component :UpdateReclamationComponent},
  {path: 'home' , component :HomeComponent},
  {path: 'account/:id' , component :AccountComponent},
  {path: 'login' , component :LoginComponent},
  {path: 'registre' , component :RegisterComponent},
  {path: 'addReclamation' , component :AddReclamationComponent},
  {path: 'addUser' , component :AddUserComponent},
  {path: 'users' , component :AllUserComponent},
  {path: '**' , component :NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
