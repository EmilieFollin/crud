import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public  users:  Array<object> = [];
  constructor(private  apiService:  ApiService) { }
  ngOnInit() {
    this.getUsers();
  }
  public  getUsers() {
    this.apiService.getUsers().subscribe((data:  Array<object>) => {
      this.users  =  data['hydra:member'];
      console.log(data['hydra:member']);
    });
  }

}
