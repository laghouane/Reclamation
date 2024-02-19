import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

type Reclamation = {
  title: string;
  description: string;
  creationDate: Date;
  owner: string;
}

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber:Number;
  jobPosition: string;
  role: string;
  grade:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  public reclamation :Reclamation[]=[]
  public user : User[]=[]
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  private url = 'http://localhost:3000/api/v1/'

  register(user: User){

    return this.http.post(this.url +'auth/signup', user);

  }
  login(user: User){

    return this.http.post(this.url +'auth/login', user);

  }

  isLoggedIn(){
    
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }

  isResponsable(user: User){
    
    if(user.role=="responsable"){
      return true;
    }else{
      return false;
    }
  }

  getUserDataFromToken(){
    /*let token = localStorage.getItem('token');
    if(token){
      let data = JSON.parse(window.atob(token.split('.')[1]))
      return data;
    }*/
    const token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const data = this.jwtHelper.decodeToken(token);
      
      return data;
    }

    return null
    // handle logout
  }

  getUserById(id: any){
    return this.http.get(this.url +'users/' + id);
  }

  getUserByEmail(email: any){
    return this.http.get(this.url +'users/' + email);

  }

  listeUser(){
    return this.http.get(this.url +'users/');
  }

  updateUser(user: User){
    return this.http.put(this.url +'users/',user);
  }

  addReclamation(reclamation: Reclamation){

    return this.http.post(this.url +'reclamations/', reclamation);

  }

  updateReclamation(reclamation: Reclamation, id:any){

    return this.http.put(this.url +'reclamations/'+ id, reclamation);

  }
  
  deleteReclamation(reclamation: Reclamation, id:any){

    return this.http.delete(this.url +'reclamations/'+ id);

  }

  listeReclamation(){

    return this.http.get(this.url +'reclamations/');

  }
  getReclamationbyId(id:any){

    return this.http.get(this.url +'reclamations/'+ id);
  }
}
