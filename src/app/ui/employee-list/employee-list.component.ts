import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'Pracownicy ';
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll()
  data = [{ name: 'Pablito ' }, { name: 'Michał' }];
  constructor(private _employeeService: EmployeeService) {
  }
}
