import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(18),Validators.max(120), Validators.required]),
    salary: new FormControl(),
  });

  constructor(private _employeeService: EmployeeService) {
  }

  buttonClicked(form: CreateEmployeeModel) {
    this._employeeService.create({ name: form.name, age: form.age, salary: form.salary }).subscribe({
      complete(){alert( form.name + ' Age:' + form.age +'with salary:' + form.salary +' was added to database')}
    });


  }
}


