import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
    data: { pageTitle: "Login" }
  },
  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "MainHome" },
    children: [
      {
        path: "home",
        loadChildren: "./Forms/Main/citizen-reporting/citizen-reporting.module#CitizenReportingModule",
        data: { pageTitle: "dashboard" }
      } 
    ]
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: "./Forms/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }