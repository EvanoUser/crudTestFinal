import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForRequestService {

    
    url:string = 'http://localhost:3000/data'
    //url:string = '../../assets/datos.json'

    constructor(private http: HttpClient) {}

    infoData(){
      return this.http.get(this.url)
    }

    agregarUsuario(datosUsuario: any) {
      return this.http.post( this.url, datosUsuario); }

    borrarUsuario(id: number){
      const urlDel = `${this.url}/${id}`;
      return this.http.delete(urlDel)
    }
}
