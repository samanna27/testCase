import {MouseEvent, useState, useRef, ChangeEvent} from 'react';
import NewsSection from '../news-section/news-section';
import Libraries from '../libraries/libraries';
import Users from '../users/users';
import Sprite from '../sprite/sprite';
import Structure from '../structure/structure';
import ModalCreateNews from '../modals/modal-create-news';
import ModalDeleteNews from '../modals/modal-delete-news';
import ModalEditNews from '../modals/modal-edit-news';
import ModalLibrariesAdd from '../modals/modal-libraries-add';
import ModalAddUser from '../modals/modal-add-user';
import {AccountType, News} from '../../types/common';
import {ThunkAppDispatch} from '../../types/action';
import {store} from '../../store/store';
import {setAccountData} from '../../store/action';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { FILE_TYPES } from '../../const';

const mapStateToProps = ({accountData, newsBundle}: State) => ({
  accountData,
  newsBundle,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MainPage({accountData, newsBundle}: ConnectedComponentProps): JSX.Element {
  const [isAccountVisible, setIsAccontVisible] = useState<boolean>(true);
  const [isNewsVisible, setIsNewsVisible] = useState<boolean>(true);
  const [isLibrariesVisible, setIsLibrariesVisible] = useState<boolean>(true);
  const [isUsersVisible, setIsUsersVisible] = useState<boolean>(true);
  const [isStructureVisible, setIsStructureVisible] = useState<boolean>(true);
  const [isAccountEdit, setIsAccontEdit] = useState<boolean>(false);
  const [isModalCreateNewsVisible, setIsModalCreateNewsVisible] = useState<boolean>(false);
  const [isModalDeleteNewsVisible, setIsModalDeleteNewsVisible] = useState<boolean>(false);
  const [newsToDelete, setNewsToDelete] = useState<News>(newsBundle[newsBundle.length-1]);
  const [isModalEditNewsVisible, setIsModalEditNewsVisible] = useState<boolean>(false);
  const [newsToEdit, setNewsToEdit] = useState<News>(newsBundle[newsBundle.length-1]);
  const [isModalLibrariesAddVisible, setIsModalLibrariesAddVisible] = useState<boolean>(false);
  const [isModalAddUserVisible, setIsModalAddUserVisible] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);

  const handleSectionClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if(evt.currentTarget.classList.contains('account__title')) {
      setIsAccontVisible(!isAccountVisible);
    } else if (evt.currentTarget.classList.contains('news__title')) {
      setIsNewsVisible(!isNewsVisible);
    } else if (evt.currentTarget.classList.contains('libraries__management')) {
      setIsLibrariesVisible(!isLibrariesVisible);
    } else if (evt.currentTarget.classList.contains('users__management')) {
      setIsUsersVisible(!isUsersVisible);
    } else if (evt.currentTarget.classList.contains('structure__title')) {
      setIsStructureVisible(!isStructureVisible);
    }
  };

  const handleAccountEditClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setIsAccontEdit(true);
  };

  const handleAvatarChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if(imageRef.current !== null && imageRef.current.files !== null) {
      const file = imageRef.current.files[0];
      const fileName = file.name.toLowerCase();

      const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

      if (matches) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          if(previewRef.current !== null) {
            previewRef.current.src = String(reader.result);
          }
        });
        reader.readAsDataURL(file);
      }
    }
  };

  const handleAccountChangeSubmit = (evt: MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsAccontEdit(false);
    let nameValue = '';
    let emailValue = '';
    let imageValue = '';

    if(nameRef.current?.value !== '' && nameRef.current?.value !== undefined) {
      nameValue = nameRef.current?.value;
    }
    if(emailRef.current?.value !== '' && emailRef.current?.value !== undefined) {
      emailValue = emailRef.current?.value;
    }
    if(imageRef.current?.value !== '' && imageRef.current?.value !== undefined) {
      imageValue = imageRef.current?.value;
    }

    const changedAccountData: AccountType = {
      name: nameValue,
      email: emailValue,
      image: imageValue,
    };

    (store.dispatch as ThunkAppDispatch)(setAccountData(changedAccountData));
  };

  const handleCreateNewsClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setIsModalCreateNewsVisible(true);
  };

  const handleAddUserClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setIsModalAddUserVisible(true);
  };

  return (
    <>
      <div className="visually-hidden">
        <Sprite />
      </div>
      <header className="header">
        <div className="header__highlighter"></div>
      </header>
      <main className="main__container">
        <h1 className="main__title">Личный кабинет системного администратора</h1>
        <section className="main__section account">
          <div className="main__section-header">
            <h2 className="account__title" onClick={handleSectionClick}>Персональные данные</h2>
            <a href="#" className="account__edit" onClick={handleAccountEditClick}>
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-edit"></use>
              </svg>
              Редактировать
            </a>
          </div>
          <div className={isAccountVisible ? '': 'main__section-hidden'}>
            <form className="account__user-data" onSubmit={handleAccountChangeSubmit}>
              <div className="account__preview">
                <img style={{position: 'relative', borderRadius: '35px'}} ref={previewRef} src="#" alt="Загрузить фото" width="70" height="70"/>
                <input ref={imageRef} type="file" id="avatar" name="avatar" className="account__input visually-hidden" disabled={!isAccountEdit} onChange={handleAvatarChange} />
                <label
                  style={{position: 'relative', right: '60px', width: '1px', height: '1px', padding: '35px', textAlign: 'center', borderRadius: '35px', cursor: 'pointer', color: 'white'}}
                  className="account__drop-zone" htmlFor="avatar"
                >
                </label>
              </div>
              <fieldset className="account__user-input">
                <label className="account__label" htmlFor="user-name">ФИО:</label>
                <input ref={nameRef} className="account__input account__input--name" id="user-name" type="text" autoComplete="off" placeholder={accountData.name} defaultValue={accountData.name} disabled={!isAccountEdit}/><br />
                <label className="account__label" htmlFor="email">Email</label>
                <input ref={emailRef} className="account__input account__input--email" id="email" type="email" autoComplete="off" placeholder={accountData.email} defaultValue={accountData.email} disabled={!isAccountEdit} />
              </fieldset>
              <button className={`account__button ${isAccountEdit ? '': 'visually-hidden'}`} type="submit">Сохранить</button>
            </form>
          </div>
        </section>
        <section className="main-news news">
          <div className="main__section-header">
            <h2 className="news__title" onClick={handleSectionClick}>Редактирование новостей</h2>
            <a href="#" className="news__edit" onClick={handleCreateNewsClick}>
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-plus"></use>
              </svg>
              Cоздать новость
            </a>
          </div>
          <div className={isNewsVisible ? '': 'main__section-hidden'}>
            <NewsSection setIsModalDeleteNewsVisible={setIsModalDeleteNewsVisible} setNewsToDelete={setNewsToDelete} setIsModalEditNewsVisible={setIsModalEditNewsVisible} setNewsToEdit={setNewsToEdit}/>
          </div>
        </section>
        <section className="main-libraries libraries">
          <div className="main__section-header">
            <h2 className="libraries__management" onClick={handleSectionClick}>Управление справочниками</h2>
          </div>
          <div className={isLibrariesVisible ? '': 'main__section-hidden'}>
            <Libraries setIsModalLibraryAddVisible={setIsModalLibrariesAddVisible}/>
          </div>
        </section>
        <section className="main-users users">
          <h2 className="users__management" onClick={handleSectionClick} >Управление пользователями</h2>
          <div className="main__section-header users__header">
            <h3 className="users__user">Сотрудник</h3>
            <a href="#" className="users__item-add" onClick={handleAddUserClick}>
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-plus"></use>
              </svg>
              Добавить пользователя
            </a>
          </div>
          <div className={isUsersVisible ? '': 'main__section-hidden'}>
            <Users />
          </div>
        </section>
        <section className="main-structure structure">
          <div className="main__section-header">
            <h2 className="structure__title" onClick={handleSectionClick}>Организационно-штатная структура ФОИВ</h2>
            <div className="structure__edit">
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-edit"></use>
              </svg>
            Редактировать
              <span className="structure__edit-options">
                <a href="#" className="structure__clean">Очистить структуру</a>
                <a href="#" className="structure__previous">Вернуть предыдущую версию</a>
              </span>
            </div>
          </div>
          <div className={isStructureVisible ? '' : 'main__section-hidden'}>
            <Structure />
          </div>
        </section>
      </main>
      {isModalCreateNewsVisible && <ModalCreateNews setIsModalCreateNewsVisible={setIsModalCreateNewsVisible}/>}
      {isModalDeleteNewsVisible && <ModalDeleteNews newsToDelete={newsToDelete} setIsModalDeleteNewsVisible={setIsModalDeleteNewsVisible}/>}
      {isModalEditNewsVisible && <ModalEditNews newsToEdit={newsToEdit} setIsModalEditNewsVisible={setIsModalEditNewsVisible}/>}
      {isModalLibrariesAddVisible && <ModalLibrariesAdd setIsModalLibrariesAddVisible={setIsModalLibrariesAddVisible}/>}
      {isModalAddUserVisible && <ModalAddUser setIsModalAddUserVisible={setIsModalAddUserVisible}/>}
      <footer style={{height: '50px'}}></footer>
    </>
  );
}

export default connector(MainPage);
