import { ConnectedProps, connect } from 'react-redux';
import { State } from '../../types/state';
import { sortRecordsCodeDown } from '../../utils';

const mapStateToProps = ({employeesList}: State) => ({
  employeesList,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Users({employeesList}: ConnectedComponentProps):JSX.Element {

  return (
    <>
      <form className="users__search">
        <input className="users__search-input" type="text" autoComplete="off" placeholder="ФИО+email" />
        <button className="users__search-submit" type="submit">Поиск</button>
        <table className="users__list">
          <thead>
            <tr className="users__line">
              <th className="users__list-header">№</th>
              <th className="users__list-header">ФИО</th>
              <th className="users__list-header">Департамент</th>
              <th className="users__list-header">Телефон</th>
              <th className="users__list-header">Почта</th>
              <th className="users__list-header">Пароль</th>
              <th className="users__list-header">Действия</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.slice().sort(sortRecordsCodeDown).map((item) => (
              <tr key={item.id} className="users__line">
                <td className="users__line-cell">{item.id}</td>
                <td className="users__line-cell">{item.name}</td>
                <td className="users__line-cell">{item.department}</td>
                <td className="users__line-cell">{item.phone}</td>
                <td className="users__line-cell">{item.email}</td>
                <td className="users__line-cell">{item.password}</td>
                <td className="users__line-cell">
                  <a className="users__change-link" aria-label="Перемещение пользователя">
                    <svg className="users__change-icon" width="12" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-change"></use>
                    </svg>
                  </a>
                  <a className="users__edit-link" href="#" aria-label="Редактирование новости">
                    <svg className="users__edit-icon" width="12" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-edit"></use>
                    </svg>
                  </a>
                  <a className="users__delete-link" href="#" aria-label="Удаление новости">
                    <svg className="users__delete-icon" width="12" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-delete"></use>
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      <div className="users__pagination pagination">
        <ul className="pagination__list">
          <li className="pagination__page pagination__page--prev" id="prev">
            <a className="link pagination__page-link" href="#">
              <svg className="pagination__back-icon" width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow-forward"></use>
              </svg>
            </a>
          </li>
          <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="4">4</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="5">5</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="6">6</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="#">...</a>
          </li>
          <li className="pagination__page"><a className="link pagination__page-link" href="28">28</a>
          </li>
          <li className="pagination__page pagination__page--next" id="next">
            <a className="link pagination__page-link" href="2">
              <svg className="pagination__forward-icon" width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow-forward"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default connector(Users);
