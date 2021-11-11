import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  base = 'http://localhost:8080/';

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    let url = this.base + 'tasks';
    return this.http.get(url);
  }

  create(tarea:any){
    let url = this.base + 'task';
    return this.http.post(url, tarea);
  }

  update(id:string, tarea: any){
    let url = this.base + 'task/' + id;
    return this.http.patch(url, tarea);
  }

  delete(id:string){
    let url = this.base + 'task/' + id;
    return this.http.delete(url);
  }

}
