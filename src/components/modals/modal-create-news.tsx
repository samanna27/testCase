import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { Dispatch, SetStateAction, MouseEvent, ChangeEvent, useRef } from 'react';
import { News } from '../../types/common';
import { store } from '../../store/store';
import {ThunkAppDispatch} from '../../types/action';
import {addNewNews} from '../../store/action';
import { FILE_TYPES } from '../../const';

type ModalCreateNewsProps = {
  setIsModalCreateNewsVisible: Dispatch<SetStateAction<boolean>>;
}

function ModalCreateNews({ setIsModalCreateNewsVisible}: ModalCreateNewsProps):JSX.Element {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const imagePreviewRef = useRef<HTMLInputElement>(null);

  const handleRejectClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsModalCreateNewsVisible(false);
  };

  const handleNewsPreviewChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if(imagePreviewRef.current !== null && imagePreviewRef.current.files !== null) {
      const file = imagePreviewRef.current.files[0];
      const fileName = file.name.toLowerCase();

      const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

      if (matches) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
          if(imageRef.current !== null) {
            imageRef.current.value = String(reader.result);
          }
        });
        reader.readAsDataURL(file);
      }
    }
  };

  const handleCreateNewsSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    let titleValue = '';
    let contentValue = '';
    let imageValue = '';

    if(titleRef.current?.value !== '' && titleRef.current?.value !== undefined) {
      titleValue = titleRef.current?.value;
    }
    if(contentRef.current?.value !== '' && contentRef.current?.value !== undefined) {
      contentValue = contentRef.current?.value;
    }
    if(imageRef.current?.value !== '' && imageRef.current?.value !== undefined) {
      imageValue = imageRef.current?.value;
    }

    const newNews: News = {
      id: nanoid(),
      title: titleValue,
      content: contentValue,
      date: dayjs().format('DD.MM.YYYY').toString(),
      image: imageValue,
    };

    (store.dispatch as ThunkAppDispatch)(addNewNews(newNews));

    setIsModalCreateNewsVisible(false);
  };

  return (
    <div style={{position: 'relative', width: '550px', height: '440px', marginBottom: '50px'}}>
      <div className="modal modal--visibility">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header">?????????????? ??????????????</h2>
            <form className="modal__form-news form-news">
              <label className="form-news__label" htmlFor="news-title">????????</label>
              <input ref={titleRef} className="form-news__input" id="news-title" type="text" autoComplete="off" placeholder="?????????????? ??????????" />
              <label className="form-news__label" htmlFor="news-content">??????????</label>
              <textarea ref={contentRef} className="form-news__input form-news__input--textarea" id="news-content" autoComplete="off" placeholder="?????????????? ??????????"></textarea>
              <label className="form-news__label" htmlFor="news-link">????????????</label>
              <input ref={imageRef} className="form-news__input form-news__input--link" id="news-link" type="text" autoComplete="off" placeholder="???????????????? ????????????" />
              <a className="form-news__download-link" aria-label="???????????????? ??????????????????????">
                <label htmlFor="newsImage" >
                  <svg className="form-news__download" width="12" height="12" aria-hidden="true">
                    <use xlinkHref="#icon-download"></use>
                  </svg>
                  <span className="form-news__download-image">?????????????????? ??????????????????????</span>
                </label>
                <input ref={imagePreviewRef} style={{display: 'none'}} type="file" id="newsImage" name="newsImage" onChange={handleNewsPreviewChange} />
              </a>
              <div className="modal__button-container">
                <button className="button button--active" type="submit" onClick={handleCreateNewsSubmit}>??????????????????</button>
                <button className="button" type="button" onClick={handleRejectClick}>????????????</button>
              </div>
            </form>
            <button className="modal__close-btn button-cross" type="button" aria-label="??????????????"><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCreateNews;
