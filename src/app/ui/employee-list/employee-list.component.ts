import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'Pracownicy ';
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll()
  data = [{ name: 'Pablito ' }, { name: 'Michał' }];
  constructor(private _employeeService: EmployeeService) {
  }
}
