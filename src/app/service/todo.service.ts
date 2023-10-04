import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url: string = "http://localhost:3000/tasks";

  constructor(private http: HttpClient ) { }

  getTask():Observable<any>{

    return this.http.get(this.url);
  }

  getTaskId(id:any):Observable<any>{

    return this.http.get(this.url+'/'+id);
  }

  AddTasks(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }

  DeleteTask(id:any):Observable<any>
  {
    return this.http.delete(this.url+"/"+id);
  }

}
