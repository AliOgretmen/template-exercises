import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odev',
  templateUrl: './odev.component.html',
  styleUrls: ['./odev.component.scss']
})
export class OdevComponent implements OnInit {
  
  @Input() public upperData;

  constructor() { }

  ngOnInit() {
  }

}
