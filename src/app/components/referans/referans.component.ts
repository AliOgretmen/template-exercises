import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referans',
  templateUrl: './referans.component.html',
  styleUrls: ['./referans.component.scss']
})
export class ReferansComponent implements OnInit {

  public inputValue = "";

  public ordnerValue = "";

  constructor() { }

  ngOnInit() {
  }

  log(value){
    console.log(value);
    this.inputValue = value;
  }
   
  totalPrice(value){
    this.ordnerValue = value + " CHF";
  }
}
