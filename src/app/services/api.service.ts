import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Coure } from '../models/coure';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Coure[]>("http://localhost:3000/coures");
  }

  addCoure(coure:Coure){
    return this.http.post<Coure>("http://localhost:3000/coures",coure);
  }

  putCoure(coure:Coure,id : number){
    return this.http.put<any>("http://localhost:3000/coures/"+id,coure)
  }


  editeCoure(coure:Coure,id : number){
    return this.http.put<any>("http://localhost:3000/coures/"+id,coure)
  }

  deleteCoure(id:any){
    return this.http.delete<Coure>("http://localhost:3000/coures/"+id);
  }
}
