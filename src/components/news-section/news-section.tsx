import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { MouseEvent, Dispatch, SetStateAction } from 'react';
import { News } from '../../types/common';
import { NEWS_FROM_INDEX, NEWS_TO_INDEX } from '../../const';
import { store } from '../../store/store';
import {ThunkAppDispatch} from '../../types/action';
import { changeNewsRenderedQuantity } from '../../store/action';

type NewsSectionProps = {
  setIsModalDeleteNewsVisible: Dispatch<SetStateAction<boolean>>,
  setIsModalEditNewsVisible: Dispatch<SetStateAction<boolean>>,
  setNewsToDelete: Dispatch<SetStateAction<News>>,
  setNewsToEdit: Dispatch<SetStateAction<News>>,
};

const mapStateToProps = ({newsBundle, newsRendered}: State) => ({
  newsBundle,
  newsRendered,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & NewsSectionProps;


function NewsSection({newsBundle, newsRendered, setIsModalDeleteNewsVisible, setNewsToDelete, setIsModalEditNewsVisible, setNewsToEdit}: ConnectedComponentProps):JSX.Element {

  const handleNewsDeleteClick = (evt: MouseEvent<HTMLAnchorElement>, item: News) => {
    evt.preventDefault();
    setIsModalDeleteNewsVisible(true);
    setNewsToDelete(item);
  };

  const handleNewsEditClick = (evt: MouseEvent<HTMLAnchorElement>, item: News) => {
    evt.preventDefault();
    setIsModalEditNewsVisible(true);
    setNewsToEdit(item);
  };

  const handleShowMoreClick =(evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    (store.dispatch as ThunkAppDispatch)(changeNewsRenderedQuantity(newsBundle.length));
  };

  return (
    <>
      <ul className="news__list">
        {newsBundle.slice(newsRendered[NEWS_FROM_INDEX], newsRendered[NEWS_TO_INDEX]).map((item) => (
          <li key={item.id} className="news__item">
            <img src={item.image} alt="News one" className="news__image" />
            <span className="news__date">{item.date}</span>
            <div className="news__controls">
              <h3 className="news__title">{item.title}</h3>
              <div className="news__icons">
                <a className="news__edit-link" href="#" aria-label="Редактирование новости" onClick={(evt) => handleNewsEditClick(evt, item)}>
                  <svg className="news__edit-icon" width="12" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-edit"></use>
                  </svg>
                </a>
                <a className="news__delete-link" href="#" aria-label="Удаление новости" onClick={(evt) => handleNewsDeleteClick(evt, item)}>
                  <svg className="news__delete-icon" width="12" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-delete"></use>
                  </svg>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <a href="#" className="news__more-news" onClick={handleShowMoreClick}>Показать все новости</a>
    </>
  );
}

export default connector(NewsSection);
