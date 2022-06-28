import { ConnectedProps, connect } from 'react-redux';
import { MouseEvent, useState } from 'react';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { store } from '../../store/store';
import { changeDepartmentSubordinatesQuantity } from '../../store/action';
import ManagerToLinear from './manager-to-linear';

type ManagerLevelEmployeeProps = {
  departmentName: string,
  managerStructure: number[],
};

const mapStateToProps = ({employeesList, departmentsStructure}: State) => ({
  employeesList,
  departmentsStructure,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ManagerLevelEmployeeProps;

function ManagerLevelEmployee({employeesList, departmentName, departmentsStructure, managerStructure}: ConnectedComponentProps):JSX.Element {
  const [isLinearLevelEmployee, setIsLinearLevelEmployee] = useState<boolean>(false);

  const hanldeAddLinearLevelClick = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setIsLinearLevelEmployee(true);
    (store.dispatch as ThunkAppDispatch)(changeDepartmentSubordinatesQuantity(departmentName, managerStructure, 1));
  };

  const hanldeDeleteManagerEmployeeClick = (evt: MouseEvent<HTMLDivElement>, item: number[]) => {
    evt.preventDefault();
    (store.dispatch as ThunkAppDispatch)(changeDepartmentSubordinatesQuantity(departmentName, item, 0));
  };

  return (
    <li  className="department__manager">
      <div className="department__employee-block">
        <select className="structure__position-list" name="position">
          <option disabled selected>Должность</option>
          <option>Руководитель Департамента</option>
          <option>Начальник отдела финансов</option>
          <option>Начальник отдела разработки</option>
          <option>Финансист</option>
          <option>Аналитик</option>
        </select>
        <select className="structure__employee-list" name="employee">
          <option disabled selected>Сотрудник</option>
          <option>Иванов И.И.</option>
          <option>Петров П.П.</option>
          <option>Кирилов К.К.</option>
          <option>Сидоров С.С.</option>
          <option>Свердлов Р.Р.</option>
        </select>
        <div className="structure__add-employee" >
          <div className="structure__edit" onClick={hanldeAddLinearLevelClick}>
            <svg width="12" height="12" aria-hidden="true">
              <use xlinkHref="#icon-edit"></use>
            </svg>
            <span className="structure__edit-options">Добавить подчиненного</span>
          </div>
          <div className="structure__delete-employee" onClick={(evt) => hanldeDeleteManagerEmployeeClick(evt, managerStructure)} style={{display: 'inline-block'}}>
            <svg width="12" height="12" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </div>
        </div>
      </div>
      { isLinearLevelEmployee &&
      <ol className="department__linear-employee-block">
        <ManagerToLinear departmentName={departmentName} managerStructure={managerStructure}/>
      </ol>}
    </li>
  );
}

export default connector(ManagerLevelEmployee);
