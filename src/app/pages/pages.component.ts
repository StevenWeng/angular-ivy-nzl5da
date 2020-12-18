import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pages",
  template: `
    <h1>Hello page!</h1>
    <router-outlet></router-outlet>
  `
})
export class PagesComponent implements OnInit {
  ngOnInit() {}
}
