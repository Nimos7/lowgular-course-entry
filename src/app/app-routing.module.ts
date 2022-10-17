import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './ui/employee-details/employee-details.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { EmployeeDetailsComponentModule } from './ui/employee-details/employee-details.component-module';
import { HomePageComponentModule } from './ui/home-page/home-page.component-module';

const routes: Routes = [{ path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-create', component: EmployeeFormComponent },
  { path: 'employee-details/:id/:name', component: EmployeeDetailsComponent },
  { path: '', component: HomePageComponent }]
@NgModule({
  imports: [RouterModule.forRoot(routes),
    EmployeeListComponentModule,
    EmployeeServiceModule,
    EmployeeFormComponentModule,
    EmployeeDetailsComponentModule,
    HomePageComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
