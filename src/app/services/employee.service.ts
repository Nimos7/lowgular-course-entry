import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../model/employee.model';
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees' ).pipe(
      map((response: ApiResponse<EmployeeResponse[]>): EmployeeModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse)=> {
          return {
            name:employeeResponse.employeeName,
           salary:employeeResponse.employeeSalary,
            age:employeeResponse.employeeAge,
            img:employeeResponse.profileImage,
            id:employeeResponse.id,
            mail: ''
          }
        });
      }));

  }

}

