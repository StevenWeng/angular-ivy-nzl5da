import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
  {
    path: "pages",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      }
    ]
  },
  { path: "", redirectTo: "/pages", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
