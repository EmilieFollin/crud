import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-heart-list',
  templateUrl: './heart-list.component.html',
  styleUrls: ['./heart-list.component.scss']
})
export class HeartListComponent implements OnInit {

  public  hearts:  Array<object> = [];

  constructor(private  apiService:  ApiService) { }
  ngOnInit() {
    this.getHears();
  }
  public  getHears() {
    this.apiService.getHearts().subscribe((data:  Array<object>) => {
      this.hearts  =  data['hydra:member'];
      console.log(data['hydra:member']);
    });
  }

}
