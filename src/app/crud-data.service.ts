import { Injectable } from '@angular/core';
import { Http } from '@angular/http';  
import 'rxjs/add/operator/map'
@Injectable()
export class CrudDataService {

  constructor(private http : Http) {
    console.log("crudDataService initialized....")
  }

  getTasks(){
    return this.http.get('/api/get').map(res=>res.json());
  }


}
