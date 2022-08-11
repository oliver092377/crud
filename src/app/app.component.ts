import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title= "crud"
  glass = [{nombre:'nombre1',costo:"cost1",id:2021},{nombre:'peli2', costo:"sd",id:2022}];
  constructor(private api:ApiService) {
    this.getGlass();
  }
  getGlass = () => {
    this.api.getAllGlass().subscribe (
      data => {
        console.log(data);
        this.glass = data;
      },
      error => {
        console.log("err: "+error);
      }    )  } }
