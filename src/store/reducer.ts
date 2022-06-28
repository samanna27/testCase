import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { DEPARTMENTS_LIST, EMPLOYEES_INITIAL_LIST, INITIAL_NEWS_SET, LIBRARY_CITIES } from '../mock/mock';
import { NEWS_FROM_INDEX, NEWS_INITIAL_RENDERED } from '../const';
import { DepartmentType } from '../types/common';

export const initialState = {
  accountData: {
    name: 'Васильев Иван Романович',
    email: 'vasiliev@gmail.com',
    image: 'img/kot_klaviatura.jpg',
  },
  newsBundle: INITIAL_NEWS_SET,
  newsRendered: [NEWS_FROM_INDEX, NEWS_INITIAL_RENDERED],
  citiesLibrary: LIBRARY_CITIES,
  employeesList: EMPLOYEES_INITIAL_LIST,
  departmentsStructure: DEPARTMENTS_LIST,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetAccountData: {
      const accountData = action.payload;
      return {...state, accountData};
    }
    case ActionType.AddNewNews: {
      const newNews = action.payload;
      const newsBundle = state.newsBundle.slice();
      newsBundle.splice(0,0,newNews);
      return {...state, newsBundle};
    }
    case ActionType.DeleteNews: {
      const newsToDelete = action.payload;
      const newsBundle = state.newsBundle.slice();
      const newsToDeleteIndex = newsBundle.map((item) => item.id).indexOf(newsToDelete.id);
      newsBundle.splice(newsToDeleteIndex,1);
      return {...state, newsBundle};
    }
    case ActionType.UpdateNews: {
      const updatedNews = action.payload;
      const newsBundle = state.newsBundle.slice();
      const updatedNewsIndex = newsBundle.map((item) => item.id).indexOf(updatedNews.id);
      newsBundle.splice(updatedNewsIndex,1, updatedNews);
      return {...state, newsBundle};
    }
    case ActionType.ChangeNewsRenderedQuantity: {
      const indexTo = action.payload;
      const newsRendered = [NEWS_FROM_INDEX, indexTo];
      return {...state, newsRendered};
    }
    case ActionType.AddRecordToLibrary: {
      const newRecord = action.payload;
      const citiesLibrary = state.citiesLibrary.slice();
      citiesLibrary.push(newRecord);
      return {...state, citiesLibrary};
    }
    case ActionType.AddEmployeeData: {
      const newEmployee = action.payload;
      const employeesList = state.employeesList.slice();
      newEmployee.id = employeesList.length+1;
      employeesList.push(newEmployee);
      return {...state, employeesList};
    }
    case ActionType.ChangeDepartmentSubordinatesQuantity: {
      const departmentName = action.payload.department;
      const managerEmployeeQuantity = action.payload.managerQuantity;
      const linearEmployeeQuantity = action.payload.linearQuantity;
      const departmentsStructure: DepartmentType = {};
      Object.assign(departmentsStructure, state.departmentsStructure);
      if(typeof(managerEmployeeQuantity) === 'number') {
        const managerEmployee = departmentsStructure[departmentName].length+1;
        departmentsStructure[departmentName].push([managerEmployee]);
      } else if(typeof(managerEmployeeQuantity) !== 'number' && linearEmployeeQuantity === 0){
        const managerEmployeeToDeleteIndex = departmentsStructure[departmentName].indexOf(managerEmployeeQuantity);
        departmentsStructure[departmentName].splice(managerEmployeeToDeleteIndex,1);
      } else if(typeof(managerEmployeeQuantity) !== 'number' && linearEmployeeQuantity === 1){
        const managerStructureToAddLinearIndex = departmentsStructure[departmentName].indexOf(managerEmployeeQuantity);
        const linearEmployee = departmentsStructure[departmentName][managerStructureToAddLinearIndex].length;
        departmentsStructure[departmentName][managerStructureToAddLinearIndex].push(linearEmployee);
      } else if(typeof(managerEmployeeQuantity) !== 'number' && linearEmployeeQuantity < 0){
        const managerStructureToDeleteLinearIndex = departmentsStructure[departmentName].indexOf(managerEmployeeQuantity);
        const linearEmployeeToDeleteIndex = departmentsStructure[departmentName][managerStructureToDeleteLinearIndex].indexOf(-linearEmployeeQuantity);
        departmentsStructure[departmentName][managerStructureToDeleteLinearIndex].splice(linearEmployeeToDeleteIndex,1);
      }
      return {...state, departmentsStructure};
    }
    default:
      return state;
  }
};

export {reducer};
