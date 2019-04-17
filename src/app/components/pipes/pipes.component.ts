import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public pipeTitle = "Bu günki konumuz pipes."

  public person = {"name": "Ali", "city": "zh", "age": 15}

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
