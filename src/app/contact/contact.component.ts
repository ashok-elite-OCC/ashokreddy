import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public data : any;
  public listData:any;
  constructor(private api:TaskService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.listData=[];
    this.api. getusers().subscribe((results:any) =>  {
      this.data = results.data;
      console.log(this.data)
       this.listData.push(this.data);
      console.log(this.listData)
    })
  }
}
