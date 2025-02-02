import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeServiceModule} from "./services/employee.service-module";
import {EmployeeListComponentModule} from "./ui/employee-list/employee-list.component-module";
import {EmployeeService} from "./services/employee.service";
import {EmployeeListComponent} from "./ui/employee-list/employee-list.component";
import {EmployeeFormComponentModule} from "./ui/employee-form/employee-form.component-module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeServiceModule,
    EmployeeListComponentModule,
    EmployeeFormComponentModule,
    NgbModule,
    RouterModule,
    CommonModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
