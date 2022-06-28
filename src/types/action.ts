import {
  // ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

import {
  setAccountData,
  addNewNews,
  deleteNews,
  updateNews,
  changeNewsRenderedQuantity,
  addRecordToLibrary,
  addEmployeeData,
  changeDepartmentSubordinatesQuantity
} from '../store/action';

export enum ActionType {
  SetAccountData = 'account/setAccountData',
  AddNewNews = 'news/addNewNews',
  DeleteNews = 'news/deleteNews',
  UpdateNews = 'news/updateNews',
  ChangeNewsRenderedQuantity = 'news/changeNewsRenderedQuantity',
  AddRecordToLibrary = 'libraries/changeNewsRenderedQuantity',
  AddEmployeeData = 'users/addEmployeeData',
  ChangeDepartmentSubordinatesQuantity = 'structure/changeDepartmentSubordinatesQuantity',
}

export type Actions =
| ReturnType<typeof setAccountData>
| ReturnType<typeof addNewNews>
| ReturnType<typeof deleteNews>
| ReturnType<typeof updateNews>
| ReturnType<typeof changeNewsRenderedQuantity>
| ReturnType<typeof addRecordToLibrary>
| ReturnType<typeof addEmployeeData>
| ReturnType<typeof changeDepartmentSubordinatesQuantity>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
