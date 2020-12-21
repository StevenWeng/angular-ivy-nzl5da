import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { PagesComponent } from "./pages/pages.component";
import { PagesModule } from "./pages/pages.module";
import { HighligntDirective } from "./commons/highlight.directive";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, PagesModule],
  declarations: [AppComponent, HelloComponent, HighligntDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
