import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { UiDatepickerDirective } from './shared/forms/input/ui-datepicker.directive';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { CitizenReportingModule } from './Forms/Main/citizen-reporting/citizen-reporting.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    NgxDatatableModule,
    NgxPaginationModule,
    CitizenReportingModule
  ],
  providers: [
    DatePipe,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
