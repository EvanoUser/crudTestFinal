import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ForRequestService } from 'src/app/services/for-request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{


  data: any [] = [];
    //id: number = 1;
    //nombre: string = "carlos";
    //email: string = "carlos@gmail.com";
  constructor(private dataService: ForRequestService){

    this.dataService.infoData().subscribe((res:any)=>{
      this.data=res;
      console.log(JSON.stringify(res))
    })

  

  }
    

}
