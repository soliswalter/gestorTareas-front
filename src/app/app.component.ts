import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: any[] = [];
  task = {
    id: null,
    name: '',
    status: ''
  }


  constructor(
    private taskService: TaskService
  ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.taskService.getAll().
    subscribe((data:any) => this.tasks = data);
  }

  save(){
    if(this.task.id){
      this.taskService.update(this.task.id!, this.task).
    subscribe(() => this.getAll());
    }
    else{
      this.taskService.create(this.task).
    subscribe(() => this.getAll());
    }  
    this.refreshTask();
  }

  edit(task: any){
    this.task = {
      ...task
    };
  }

  refreshTask(){
    this.task = {
      id: null,
      name: '',
      status: ''
    }
  }

  delete(id: string){
    this.taskService.delete(id).
    subscribe(()=> this.getAll());
  }


}


