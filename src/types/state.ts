import {AccountType, News, City, Employee, DepartmentType} from './common';

export type State = {
  accountData: AccountType,
  newsBundle: News[],
  newsRendered: number[],
  citiesLibrary: City[],
  employeesList: Employee[],
  departmentsStructure: DepartmentType,
};
