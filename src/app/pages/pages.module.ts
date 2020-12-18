import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  imports: [RouterModule],
  declarations: [PagesComponent],
  exports: [PagesComponent]
})
export class PagesModule {}
