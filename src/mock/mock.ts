import { nanoid } from 'nanoid';
import { Library, News, City, Employee, DepartmentType } from '../types/common';

export const INITIAL_NEWS_SET: News[] = [
  {
    id: nanoid(),
    title: 'Проект расписания ГИА-11',
    content: 'ooo',
    date: '06.02.2021',
    image: 'img/kot_klaviatura.jpg',
  },
  {
    id: nanoid(),
    title: 'Проведение основного государственного экзамена',
    content: 'aaa',
    date: '29.01.2021',
    image: 'img/kot_klaviatura.jpg',
  },
  {
    id: nanoid(),
    title: 'Итоговое сочинение',
    content: 'иии',
    date: '27.01.2021',
    image: 'img/kot_klaviatura.jpg',
  },
];

export const LIBRARIES_SET: Library[] = [
  {
    title: 'Справочник 1',
    type: 'Нерасширяемый',
  },
  {
    title: 'Справочник 2',
    type: 'Нерасширяемый',
  },
  {
    title: 'Справочник 3',
    type: 'Нерасширяемый',
  },
  {
    title: 'Справочник 4',
    type: 'Расширяемый',
  },
];

export const LIBRARY_CITIES: City[] = [
  {
    id: 873,
    name: 'Барабинск',
  },
  {
    id: 874,
    name: 'Бердск',
  },
  {
    id: 875,
    name: 'Искитим',
  },
  {
    id: 876,
    name: 'Железногорск-Илимский',
  },
];

export const EMPLOYEES_INITIAL_LIST: Employee[] = [
  {
    id: 1,
    name: 'Иванов Иван Иванович',
    department: 'Цифровизации',
    position: '',
    phone: '8 983 123 45 67',
    email: 'nstu@mail.ru',
    password: 'Отправлен',
  },
  {
    id: 2,
    name: 'Петров Пётр Петрович',
    department: 'ИТ',
    position: '',
    phone: '8 983 123 45 67',
    email: 'nsu@mail.ru',
    password: 'Получен',
  },
];

export const DEPARTMENTS_LIST: DepartmentType = {
  'Департамент информатизации': [],
  'Департамент управления': [],
};
