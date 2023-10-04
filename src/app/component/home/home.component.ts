import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder  } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  RegisterForm: FormGroup<{ task_name: FormControl<string | null>; }>;
  taskList: any;
  completeTask : any[] = [];


  constructor(public fb:FormBuilder,public service:TodoService){
    this.RegisterForm = this.fb.group({
      task_name : [""]
    })
  }
  ngOnInit(): void {
  
    this.GetTask()
  }

  AddTask()
  {
    this.service.AddTasks(this.RegisterForm.value).subscribe(data =>
      {this.GetTask()})
      this.RegisterForm.reset();

  }

  GetTask()
  {
    this.service.getTask().subscribe(data=>{
      console.log("data",data);
      this.taskList = data;
    })
  }

  DeleteTask(id:any)
  {
      this.service.DeleteTask(id).subscribe(data=>{
        this.GetTask()
      })
  }

  Complete(id:any)
  {
    this.service.getTaskId(id).subscribe(data=>{
      console.log("data",data);
      this.completeTask.push(data)
      this.DeleteTask(id);
    })
  }
  
  RemoveTask(id:any)
  {
    // this.completeTask.forEach(projet=>
    //       console.log(projet.indexOf(projet.id))

    //   );

    // console.log(this.completeTask.map(item => item.id).indexOf(id));
    this.completeTask.splice(this.completeTask.map(item => item.id).indexOf(id), 1);
    console.log(this.completeTask)
  }

}
