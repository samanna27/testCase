import { Dispatch, SetStateAction, MouseEvent } from 'react';
import { store } from '../../store/store';
import { ThunkAppDispatch } from '../../types/action';
import { deleteNews } from '../../store/action';
import { News } from '../../types/common';

type ModalDeleteNewsProps = {
  setIsModalDeleteNewsVisible: Dispatch<SetStateAction<boolean>>,
  newsToDelete: News,
};

function ModalDeleteNews({setIsModalDeleteNewsVisible, newsToDelete}: ModalDeleteNewsProps):JSX.Element {

  const handleDeleteConfirmationClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    (store.dispatch as ThunkAppDispatch)(deleteNews(newsToDelete));
    setIsModalDeleteNewsVisible(false);
  };

  const handleSkipActionClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsModalDeleteNewsVisible(false);
  };

  return (
    <div style={{position: 'relative', width: '550px', height: '440px', marginBottom: '50px'}}>
      <div className="modal modal--visibility">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header">Вы действительно хотите удалить новость?</h2>
            <div className="modal__news-info">
              <h3 className="modal__news-title">{newsToDelete.title}</h3>
              <p className="modal__news-content">{newsToDelete.content}</p>
            </div>
            <div className="modal__button-container">
              <button className="button button--active" onClick={handleDeleteConfirmationClick}>Удалить новость</button>
              <button className="button" onClick={handleSkipActionClick}>Оставить новость</button>
            </div>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteNews;
