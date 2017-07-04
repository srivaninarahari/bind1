import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
    title :string;
    name :string;
  constructor() { }

  ngOnInit() {
    this.title = "ANGULAR" //THIS  ARE THE  VALUES DECLARED IN ONiNIT
    this.name = "SREEVANI"
  }

}
