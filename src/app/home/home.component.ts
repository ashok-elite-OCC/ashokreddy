import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data : any;
  public metadata : any;
  position = 'before';
  constructor(private api:TaskService) { }
  getdata() {
     this.metadata=[];
    this.api. getuser().subscribe((output:any) =>  {
      this.data = output.data;
       this.metadata.push(this.data);
      console.log(this.data)
    })
  }
  
  ngOnInit() {
    this.getdata();
  }

}
