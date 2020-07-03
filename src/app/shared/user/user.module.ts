

import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginInfoComponent} from "./login-info/login-info.component";
import {LogoutComponent} from "./logout/logout.component";
import {AccordionModule, CarouselModule, PopoverModule} from "ngx-bootstrap";
@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),

    CarouselModule.forRoot(),
  ],
  declarations: [LoginInfoComponent, LogoutComponent],
  exports: [LoginInfoComponent, LogoutComponent]
})
export class UserModule{}
