import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export  class  ApiService {

  API_URL  =  'http://localhost:8000/api'
  constructor(private  httpClient:  HttpClient) {}

  getUsers(){
    return  this.httpClient.get(`${this.API_URL}/users`);
  }

  getHearts(){
    return  this.httpClient.get(`${this.API_URL}/hearts`);
  }

  createUser(user){
    return  this.httpClient.post(`${this.API_URL}/users/`, user);
  }



}
