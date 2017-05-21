import { Component } from '@angular/core';
import { CrudDataService } from './crud-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CrudDataService]
})
export class AppComponent {
  constructor(private crudDataService : CrudDataService ) { 
    this.crudDataService.getTasks().subscribe(tasks=>{
      console.log(tasks);
      this.getTasks(tasks);
    });
  }
  items=[];
  getTasks = function(tasks){
    this.items = tasks;
  }
  //items = ['AngularJS','ReactJS','jQuery'];
  newItem = "";
  pushItem = function(){
    if(this.newItem!=""){
      var tempTask = { task : this.newItem, done : false};
      this.items.push(tempTask);
      this.crudDataService.addTask(tempTask);
    }
  }
  removeItem = function(index){
    this.items.splice(index,1);
  }
}
