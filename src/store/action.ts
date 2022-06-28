import { ActionType } from '../types/action';
import { AccountType, City, Employee, News } from '../types/common';

export const setAccountData = (accountData: AccountType) => ({
  type: ActionType.SetAccountData,
  payload: accountData,
} as const);

export const addNewNews = (newNews: News) => ({
  type: ActionType.AddNewNews,
  payload: newNews,
} as const);

export const deleteNews = (newsToDelete: News) => ({
  type: ActionType.DeleteNews,
  payload: newsToDelete,
} as const);

export const updateNews = (updatedNews: News) => ({
  type: ActionType.UpdateNews,
  payload: updatedNews,
} as const);

export const changeNewsRenderedQuantity = (indexTo: number) => ({
  type: ActionType.ChangeNewsRenderedQuantity,
  payload: indexTo,
} as const);

export const addRecordToLibrary = (newRecord: City) => ({
  type: ActionType.AddRecordToLibrary,
  payload: newRecord,
} as const);

export const addEmployeeData = (newEmployee: Employee) => ({
  type: ActionType.AddEmployeeData,
  payload: newEmployee,
} as const);

export const changeDepartmentSubordinatesQuantity = (department: string, managerQuantity: number | number[], linearQuantity: number) => ({
  type: ActionType.ChangeDepartmentSubordinatesQuantity,
  payload: {
    department,
    managerQuantity,
    linearQuantity,
  },
} as const);
