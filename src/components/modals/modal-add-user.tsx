import { Dispatch, SetStateAction, MouseEvent, ChangeEvent, useRef } from 'react';
import { Employee } from '../../types/common';
import { store } from '../../store/store';
import { ThunkAppDispatch } from '../../types/action';
import { addEmployeeData } from '../../store/action';

type ModalAddUserProps = {
  setIsModalAddUserVisible: Dispatch<SetStateAction<boolean>>,
};

function ModalAddUser({setIsModalAddUserVisible}: ModalAddUserProps):JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLSelectElement>(null);
  const departmentRef = useRef<HTMLSelectElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  let positionValue = '';
  let departmentValue = '';

  const handleModalCloseClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsModalAddUserVisible(false);
  };

  const handleSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    positionValue = '';
    departmentValue = '';

    const index = evt.currentTarget.selectedIndex;

    if(evt.currentTarget.name === 'position') {
      positionValue = String(evt.currentTarget[index].textContent);
    } else if(evt.currentTarget.name === 'department') {
      departmentValue = String(evt.currentTarget[index].textContent);
    }
  };

  const handleEmployeeDataSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    let nameValue = '';
    let phoneValue = '';
    let emailValue = '';

    if(nameRef.current?.value !== '' && nameRef.current?.value !== undefined) {
      nameValue = nameRef.current?.value;
    }
    if(phoneRef.current?.value !== '' && phoneRef.current?.value !== undefined) {
      phoneValue = phoneRef.current?.value;
    }
    if(emailRef.current?.value !== '' && emailRef.current?.value !== undefined) {
      emailValue = emailRef.current?.value;
    }

    const newEmployee: Employee = {
      id: 1000000,
      name: nameValue,
      position: positionValue,
      department: departmentValue,
      phone: phoneValue,
      email: emailValue,
      password: '',
    };

    (store.dispatch as ThunkAppDispatch)(addEmployeeData(newEmployee));
    setIsModalAddUserVisible(false);
  };

  return (
    <div style={{position: 'relative', width: '550px', height: '610px', marginBottom: '50px'}}>
      <div className="modal modal--visibility">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header">Добавить администратора РОУ</h2>
            <form className="form-employee">
              <div className="form-employee__user-wrapper">
                <input ref={nameRef} className="form-employee__input" type="text" autoComplete="off" placeholder="ФИО" />
                <svg className="form-employee__icon-full-star" width="12" height="11" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <select ref={positionRef} className="form-employee__input form-employee__input--select" name="position" defaultValue={'Должность'}>
                  <option disabled>Должность</option>
                  <option>Руководитель Департамента</option>
                  <option>Начальник отдела финансов</option>
                  <option>Начальник отдела разработки</option>
                  <option>Финансист</option>
                  <option>Аналитик</option>
                </select>
                <svg className="form-employee__icon-full-star" width="12" height="11" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <input ref={emailRef} className="form-employee__input" type="text" autoComplete="off" placeholder="Почта" />
                <svg className="form-employee__icon-full-star" width="12" height="11" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <input ref={phoneRef} className="form-employee__input" type="text" autoComplete="off" placeholder="Телефон" />
                <select ref={departmentRef} className="form-employee__input form-employee__input--select" name="department" defaultValue={'Департамент'} onChange={handleSelectChange}>
                  <option disabled>Департамент</option>
                  <option>Департамент информатизации</option>
                  <option>Департамент управления</option>
                </select>
                <svg className="form-employee__icon-full-star" width="12" height="11" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <input className="form-employee__input" type="text" autoComplete="off" placeholder="Пароль" disabled />
              </div>
              <div className="modal__button-container">
                <button className="button form-employee__button" type="submit" onClick={handleEmployeeDataSubmit}>Сохранить</button>
              </div>
            </form>
            <button className="modal__close-btn button-cross" type="submit" aria-label="Закрыть" onClick={handleModalCloseClick}><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddUser;
