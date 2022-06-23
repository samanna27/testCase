function Structure():JSX.Element {

  return (
    <ol className="structure__levels">
      <li className="structure__department">
        <select className="structure__department-list" name="department">
          <option disabled selected>Департамент</option>
          <option>Департамент информатизации</option>
          <option>Департамент управления</option>
        </select>
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
            <option>Иванов И.И.</option>
            <option>Петров П.П.</option>
            <option>Кирилов К.К.</option>
            <option>Сидоров С.С.</option>
            <option>Свердлов Р.Р.</option>
          </select>
          <div className="structure__edit">
            <svg width="12" height="12" aria-hidden="true">
              <use xlinkHref="#icon-edit"></use>
            </svg>
            <span className="structure__edit-options">
              <a href="#" className="structure__add">Добавить подчиненного</a>
            </span>
          </div>
        </div>
        <ol className="department__manager-block">
          <li className="department__manager">
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
              <div className="structure__add-employee">
                <div className="structure__edit">
                  <svg width="12" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-edit"></use>
                  </svg>
                  <span className="structure__edit-options">Добавить подчиненного</span>
                </div>
                <svg width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-close"></use>
                </svg>
              </div>
            </div>
          </li>
          <ol className="department__linear-employee-block">
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
                <div className="structure__add-employee">
                  <div className="structure__edit">
                    <svg width="12" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-edit"></use>
                    </svg>
                    <span className="structure__edit-options">Добавить подчиненного</span>
                  </div>
                  <svg width="12" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                </div>
              </div>
            </li>
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
                <div className="structure__add-employee">
                  <div className="structure__edit">
                    <svg width="12" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-edit"></use>
                    </svg>
                    <span className="structure__edit-options">Добавить подчиненного</span>
                  </div>
                  <svg width="12" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-close"></use>
                  </svg>
                </div>
              </div>
            </li>
          </ol>
          <li className="department__manager">
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
              <div className="structure__add-employee">
                <div className="structure__edit">
                  <svg width="12" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-edit"></use>
                  </svg>
                  <span className="structure__edit-options">Добавить подчиненного</span>
                </div>
                <svg width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-close"></use>
                </svg>
              </div>
            </div>
          </li>
        </ol>
      </li>
      <li className="structure__department">
        <select className="structure__department-list" name="department">
          <option disabled selected>Департамент</option>
          <option>Департамент информатизации</option>
          <option>Департамент управления</option>
        </select>
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
            <option>Иванов И.И.</option>
            <option>Петров П.П.</option>
            <option>Кирилов К.К.</option>
            <option>Сидоров С.С.</option>
            <option>Свердлов Р.Р.</option>
          </select>
          <div className="structure__add-employee">
            <div className="structure__edit">
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-edit"></use>
              </svg>
              <span className="structure__edit-options">Добавить подчиненного</span>
            </div>
          </div>
        </div>
      </li>
    </ol>
  );
}

export default Structure;
