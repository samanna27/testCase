import { Dispatch, SetStateAction, MouseEvent, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { City } from '../../types/common';
import { store } from '../../store/store';
import {ThunkAppDispatch} from '../../types/action';
import { addRecordToLibrary } from '../../store/action';
import { State } from '../../types/state';
import { sortRecordsCodeDown } from '../../utils';

const makeCorrectCodeFormat = (record: number) => {
  if(record<10) {
    return `000${record}`;
  } else if (record<100) {
    return `00${record}`;
  } else if (record<1000) {
    return `0${record}`;
  }
};

type ModalLibrariesAddProps = {
  setIsModalLibrariesAddVisible: Dispatch<SetStateAction<boolean>>,
};

const mapStateToProps = ({citiesLibrary}: State) => ({
  citiesLibrary,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ModalLibrariesAddProps;

function ModalLibrariesAdd({setIsModalLibrariesAddVisible, citiesLibrary}: ConnectedComponentProps):JSX.Element {
  const cityNameRef = useRef<HTMLInputElement>(null);

  const handleModalCloseClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsModalLibrariesAddVisible(false);
  };

  const saveNewRecordClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    let cityName = '';

    if(cityNameRef.current?.value !== '' && cityNameRef.current?.value !== undefined) {
      cityName = cityNameRef.current?.value;
    }

    const newRecord: City = {
      id: citiesLibrary[citiesLibrary.length-1].id+1,
      name: cityName,
    };

    (store.dispatch as ThunkAppDispatch)(addRecordToLibrary(newRecord));

    if(cityNameRef.current?.value !== '' && cityNameRef.current?.value !== undefined) {
      cityNameRef.current.value='';
    }
  };

  return (
    <div style={{position: 'relative', width: '550px', height: '440px', marginBottom: '50px'}}>
      <div className="modal modal--visibility">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content library">
            <h2 className="library__header">Города</h2>
            <input className="library__search" type="text" autoComplete="off" placeholder="Поиск по названию" />
            <table className="library__table">
              <thead className="library__table-header">
                <tr className="library__table-line">
                  <th className="library__table-header-cell">
                      Идентификатор
                  </th>
                  <th className="library__table-header-cell library__table-header-cell--container">
                    <p>
                        Название
                    </p>
                    <a href="#" className="library__item-link">
                      <svg className="library__item-link" width="12" height="12" aria-hidden="true">
                        <use xlinkHref="#icon-plus"></use>
                      </svg>
                          Добавить
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody className="library__table-body">
                <tr className="library__table-line">
                  <td className="library__record-item-id">
                    <input type="text" className="library__record-item-id-input" value={makeCorrectCodeFormat(citiesLibrary[citiesLibrary.length-1].id+1)} />
                  </td>
                  <td className="library__record-item-name">
                    <input ref={cityNameRef} type="text" className="library__record-item-name-input" />
                  </td>
                </tr>
                {citiesLibrary.slice(citiesLibrary.length-4,citiesLibrary.length).sort(sortRecordsCodeDown).map((item) => (
                  <tr key={item.id} className="library__table-line">
                    <td className="library__record-item-id">
                      <input type="text" className="library__record-item-id-input" value={makeCorrectCodeFormat(item.id)} />
                    </td>
                    <td className="library__record-item-name">
                      <input type="text" className="library__record-item-name-input" value={item.name} disabled />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="modal__button-container">
              <button className="button button--active" type="submit" onClick={saveNewRecordClick}>Сохранить</button>
            </div>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={handleModalCloseClick}><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connector(ModalLibrariesAdd);
