function News():JSX.Element {
  return (
    <>
      <ul className="news__list">
        <li className="news__item">
          <img src="img/kot_klaviatura.jpg" alt="News one" className="news__image" />
          <span className="news__date">01.01.2022</span>
          <div className="news__controls">
            <h3 className="news__title">Проект расписания ГИА-11</h3>
            <div className="news__icons">
              <a className="news__edit-link" href="#" aria-label="Редактирование новости">
                <svg className="news__edit-icon" width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-edit"></use>
                </svg>
              </a>
              <a className="news__delete-link" href="#" aria-label="Удаление новости">
                <svg className="news__delete-icon" width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-delete"></use>
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li className="news__item">
          <img src="img/kot_klaviatura.jpg" alt="News two" className="news__image" />
          <span className="news__date">01.06.2022</span>
          <div className="news__controls">
            <h3 className="news__title">Проведение основного государственного экзамена</h3>
            <div className="news__icons">
              <a className="news__edit-link" href="#" aria-label="Редактирование новости">
                <svg className="news__edit-icon" width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-edit"></use>
                </svg>
              </a>
              <a className="news__delete-link" href="#" aria-label="Удаление новости">
                <svg className="news__delete-icon" width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-delete"></use>
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li className="news__item">
          <img src="img/kot_klaviatura.jpg" alt="News three" className="news__image" />
          <span className="news__date">11.06.2022</span>
          <div className="news__controls">
            <h3 className="news__title">Итоговое сочинение</h3>
            <div className="news__icons">
              <a className="news__edit-link" href="#" aria-label="Редактирование новости">
                <svg className="news__edit-icon" width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-edit"></use>
                </svg>
              </a>
              <a className="news__delete-link" href="#" aria-label="Удаление новости">
                <svg className="news__delete-icon" width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-delete"></use>
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <a href="#" className="news__more-news">Показать все новости</a>
    </>
  );
}

export default News;
