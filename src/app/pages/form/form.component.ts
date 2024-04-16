import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ForRequestService } from 'src/app/services/for-request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  nuevoUsuario: any = {
    
  };


  constructor(private dataService: ForRequestService){}

  id: any;
  nombre: any;
  email: any;
  

  agregarUsuario(persona:any ){
    this.dataService.agregarUsuario(persona.value).subscribe((res)=>{
      console.log('Ingreso corecto' + res);
    })
  }

  
}
