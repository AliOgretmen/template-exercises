import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Input() public parentData;
  @Input('parentData') public hallo;

  @Output() public childData = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  sendEvent(){
    this.childData.emit('Data from Child Componet')

  }

}
