import { Component, Input } from "@angular/core";

@Component({
  selector: "pages",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class PagesComponent {
  @Input() name: string;
}
