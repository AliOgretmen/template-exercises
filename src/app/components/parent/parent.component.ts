import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public name = "---->Parent datayim"

  public newMessage = "";

  public valuez = ""

  constructor() { }

  ngOnInit() {
  }

  message(value){
    console.log(value);
  }

}
