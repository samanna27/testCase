import { ConnectedProps, connect } from 'react-redux';
import { MouseEvent, ChangeEvent, useState, useRef } from 'react';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { store } from '../../store/store';
import { changeDepartmentSubordinatesQuantity } from '../../store/action';
import DepartmentToManager from './department-to-manager';

const mapStateToProps = ({employeesList, departmentsStructure}: State) => ({
  employeesList,
  departmentsStructure,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function DepartmentLevelEmployee({employeesList, departmentsStructure}: ConnectedComponentProps):JSX.Element {
  const [isDepartmentSelected, setIsDepartmentSelected] = useState<boolean>(false);
  const [isManagerLevelEmployee, setIsManagerLevelEmployee] = useState<boolean>(false);
  const [isDepartmentName, setIsDepartmentName] = useState<string>('');
  const departmentNameRef = useRef<HTMLSelectElement>(null);
  let departmentName = '';

  const handleDepartmentSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    const index = evt.currentTarget.selectedIndex;

    if(evt.currentTarget[index].textContent !== 'Департамент'){
      setIsDepartmentSelected(true);
      setIsDepartmentName(String(evt.currentTarget[index].textContent));
    }
  };

  const hanldeAddManagerLevelClick = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    if(departmentNameRef.current?.selectedOptions[0].value !== undefined) {
      departmentName = departmentNameRef.current?.selectedOptions[0].value;
    }
    (store.dispatch as ThunkAppDispatch)(changeDepartmentSubordinatesQuantity(departmentName, +1, 0));
    setIsManagerLevelEmployee(true);
  };

  return (
    <li className="structure__department">
      <select ref={departmentNameRef} className="structure__department-list" name="department1" onChange={handleDepartmentSelect}>
        <option disabled selected>Департамент</option>
        <option>Департамент информатизации</option>
        <option>Департамент управления</option>
      </select>
      {isDepartmentSelected &&
      <div className="department__head-employee-block">
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
          {employeesList.slice().map((item) => (<option key={item.id}>{item.name}</option>))}
        </select>
        <div className="structure__edit" onClick={hanldeAddManagerLevelClick}>
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="#icon-edit"></use>
          </svg>
          <span className="structure__edit-options">
            <a href="#" className="structure__add" >Добавить подчиненного</a>
          </span>
        </div>
      </div>}
      {isManagerLevelEmployee &&
      <ol className="department__manager-block">
        <DepartmentToManager departmentName={isDepartmentName}/>
      </ol>}
    </li>
  );
}

export default connector(DepartmentLevelEmployee);


