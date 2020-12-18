import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
  {
    path: "pages",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then(
            m => m.DashboardModule
          )
      }
    ]
  },
  { path: "", redirectTo: "/pages/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
