import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <p appHighlight>highlight test</p>
    <p>{{ testValue }}</p>
    <input type="text" [(ngModel)]="testValue" logNgModel />
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  testValue: string;

  ngOnInit(): void {
    this.testValue = "test";
  }
}
