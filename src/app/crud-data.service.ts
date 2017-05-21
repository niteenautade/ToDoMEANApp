import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import 'rxjs/add/operator/map'
@Injectable()
export class CrudDataService {

  constructor(private http : Http) {
    console.log("crudDataService initialized....")
  }

  getTasks(){
    return this.http.get('/api/get').map(res=>res.json());
  }

  addTask(task){
    var headers = new Headers();
    headers.append('Content-Type','application/json;charset=utf-8');
    console.log('yahoooooo',task);
    this.http.post('/api/add',task,headers).subscribe(
      ()=>{},
      err=> console.log(err)
    );
  }


}
