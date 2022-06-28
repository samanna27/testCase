import { ConnectedProps, connect } from 'react-redux';
import { MouseEvent } from 'react';
import { State } from '../../types/state';
import { store } from '../../store/store';
import { ThunkAppDispatch } from '../../types/action';
import { changeDepartmentSubordinatesQuantity } from '../../store/action';

type LinearLevelEmployeeProps = {
  departmentName: string,
  managerStructure: number[],
  linearEmployee: number,
};

const mapStateToProps = ({employeesList}: State) => ({
  employeesList,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & LinearLevelEmployeeProps;

function LinearLevelEmployee({employeesList, departmentName, managerStructure, linearEmployee}: ConnectedComponentProps):JSX.Element {

  const hanldeDeleteEmployeeClick = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    (store.dispatch as ThunkAppDispatch)(changeDepartmentSubordinatesQuantity(departmentName, managerStructure, -linearEmployee));
  };

  return (
    <li className="department__linear-employee">
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
          <div className="structure__edit">
            <svg width="12" height="12" aria-hidden="true">
              <use xlinkHref="#icon-edit"></use>
            </svg>
            <span className="structure__edit-options">Добавить подчиненного</span>
          </div>
          <div className="structure__delete-employee" onClick={hanldeDeleteEmployeeClick} style={{display: 'inline-block'}}>
            <svg width="12" height="12" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
}

export default connector(LinearLevelEmployee);
