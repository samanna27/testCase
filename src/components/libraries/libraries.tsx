import { UNEXTENDABLE } from '../../const';
import { LIBRARIES_SET } from '../../mock/mock';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

type LibrariesProps = {
  setIsModalLibraryAddVisible: Dispatch<SetStateAction<boolean>>,
}

function Libraries({setIsModalLibraryAddVisible}: LibrariesProps):JSX.Element {

  const handleAddToLibraryClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setIsModalLibraryAddVisible(true);
  };

  return (
    <>
      <ul className="libraries__list">
        {LIBRARIES_SET.slice().map((item) => (
          item.type === UNEXTENDABLE
            ?
            <li key={item.title} className="libraries__item">
              <h3 className="libraries__item-name">{item.title}</h3>
              <p className="libraries__item-type">{item.type}</p>
              <a href="#" className="libraries__item-link">Посмотреть</a>
            </li>
            :
            <li key={item.title} className="libraries__item">
              <h3 className="libraries__item-name">{item.title}</h3>
              <p className="libraries__item-type">{item.type}</p>
              <a href="#" className="libraries__item-link" onClick={handleAddToLibraryClick}>
                <svg width="12" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-plus"></use>
                </svg>
            добавить
              </a>
            </li>
        ))}
      </ul>
      <a href="#" className="libraries__more">Показать все справочники</a>
    </>
  );
}

export default Libraries;
