import {MouseEvent, useState} from 'react';
import News from '../news/news';
import Libraries from '../libraries/libraries';
import Users from '../users/users';
import Sprite from '../sprite/sprite';
import Structure from '../structure/structure';

function MainPage(): JSX.Element {
  const [isAccountVisible, setIsAccontVisible] = useState<boolean>(true);
  const [isNewsVisible, setIsNewsVisible] = useState<boolean>(true);
  const [isLibrariesVisible, setIsLibrariesVisible] = useState<boolean>(true);
  const [isUsersVisible, setIsUsersVisible] = useState<boolean>(true);
  const [isStructureVisible, setIsStructureVisible] = useState<boolean>(true);
  const [isAccountEdit, setIsAccontEdit] = useState<boolean>(false);

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

  const handleAccountChangeSubmit = (evt: MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsAccontEdit(false);
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
                {/* <img src="#" alt="Загрузите фото" width="70" height="70" /> */}
                <input type="file" id="avatar" name="avatar" className="account__input visually-hidden" disabled={!isAccountEdit} />
                <label className="account__drop-zone" htmlFor="avatar">Загрузить<br />фото...</label>
              </div>
              <fieldset className="account__user-input">
                <label className="account__label" htmlFor="user-name">ФИО:</label>
                <input className="account__input account__input--name" id="user-name" type="text" autoComplete="off" placeholder="Васильев Иван Романович" disabled={!isAccountEdit}/><br />
                <label className="account__label" htmlFor="email">Email</label>
                <input className="account__input account__input--email" id="email" type="email" autoComplete="off" placeholder="vasiliev@gmail.com" disabled={!isAccountEdit} />
              </fieldset>
              <button className={`account__button ${isAccountEdit ? '': 'visually-hidden'}`} type="submit">Сохранить</button>
            </form>
          </div>
        </section>
        <section className="main-news news">
          <div className="main__section-header">
            <h2 className="news__title" onClick={handleSectionClick}>Редактирование новостей</h2>
            <a href="#" className="news__edit">
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-plus"></use>
              </svg>
              Cоздать новость
            </a>
          </div>
          <div className={isNewsVisible ? '': 'main__section-hidden'}>
            <News />
          </div>
        </section>
        <section className="main-libraries libraries">
          <div className="main__section-header">
            <h2 className="libraries__management" onClick={handleSectionClick}>Управление справочниками</h2>
          </div>
          <div className={isLibrariesVisible ? '': 'main__section-hidden'}>
            <Libraries />
          </div>
        </section>
        <section className="main-users users">
          <h2 className="users__management" onClick={handleSectionClick} >Управление пользователями</h2>
          <div className="main__section-header users__header">
            <h3 className="users__user">Сотрудник</h3>
            <a href="#" className="users__item-add">
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
    </>
  );
}

export default MainPage;
