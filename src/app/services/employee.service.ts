import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../model/employee.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>
    ('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeResponse[]>): EmployeeModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            salary: employeeResponse.employee_salary,
            age: employeeResponse.employee_age,
            img: employeeResponse.profile_image,
            id: employeeResponse.id,
            mail: employeeResponse.employee_name + "@lowgular.io"
          }
        });
      }));

  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(_ => void 0));

  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));

  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>('https://dummy.restapiexample.com/api/v1/employee/'+id).pipe(
      map((response:ApiResponse<EmployeeResponse>): EmployeeModel  => ({
        id: response.data.id,
        mail: response.data.employee_name+"@lowgular.io",
        img: response.data.profile_image,
        salary: response.data.employee_salary,
        name: response.data.employee_name,
        age: response.data.employee_age,
        }))
    );


  }

}


