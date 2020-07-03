import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import { CitizenReportingComponent } from "./citizen-reporting.component";
 

export const routes:Routes = [
  {
    path:'',
    component:CitizenReportingComponent,
    pathMatch: 'full',
    data:{pageTitle:'Citizen Reporting System'},
}
];
  export const SNrouting = RouterModule.forChild(routes)