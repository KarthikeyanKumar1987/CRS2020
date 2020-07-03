import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { SmartadminValidationModule } from '@app/shared/forms/validation/smartadmin-validation.module';
import { SNrouting } from './citizen-reporting.routing';
import { CitizenReportingComponent } from './citizen-reporting.component';
import { ListOfOpenTicketsComponent } from './list-of-open-tickets/list-of-open-tickets.component';

@NgModule({
  declarations: [
    CitizenReportingComponent,
    ListOfOpenTicketsComponent
  ],
  imports: [
    CommonModule,
    SNrouting,
    SharedModule,
    NgxPaginationModule,
    SmartadminValidationModule,
    NgxDatatableModule,
  ],
  providers: [
   ],
})
export class CitizenReportingModule { }
