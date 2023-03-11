import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl="http://localhost:8080/api/movies";
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  constructor(private http: HttpClient) { }
  create(data:any){
    return this.http.post(baseUrl,data);
  }
  delete(id:any){
  
    return this.http.delete(baseUrl+'/'+id);
  }
  getAll(){
    return this.http.get(baseUrl);
  }
 update(id:any,data:any){
  return this.http.put(baseUrl+'/'+id,data);
 }
}
