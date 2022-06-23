function Libraries():JSX.Element {
  return (
    <>
      <ul className="libraries__list">
        <li className="libraries__item">
          <h3 className="libraries__item-name">Справочник 1</h3>
          <p className="libraries__item-type">Нерасширяемый</p>
          <a href="#" className="libraries__item-link">Посмотреть</a>
        </li>
        <li className="libraries__item">
          <h3 className="libraries__item-name">Справочник 2</h3>
          <p className="libraries__item-type">Нерасширяемый</p>
          <a href="#" className="libraries__item-link">Посмотреть</a>
        </li>
        <li className="libraries__item">
          <h3 className="libraries__item-name">Справочник 3</h3>
          <p className="libraries__item-type">Нерасширяемый</p>
          <a href="#" className="libraries__item-link">Посмотреть</a>
        </li>
        <li className="libraries__item">
          <h3 className="libraries__item-name">Справочник 4</h3>
          <p className="libraries__item-type">Расширяемый</p>
          <a href="#" className="libraries__item-link">
            <svg width="12" height="12" aria-hidden="true">
              <use xlinkHref="#icon-plus"></use>
            </svg>
            добавить
          </a>
        </li>
      </ul>
      <a href="#" className="libraries__more">Показать все справочники</a>
    </>
  );
}

export default Libraries;
