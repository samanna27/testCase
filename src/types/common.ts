export type AccountType = {
  name: string;
  email: string;
  image: string;
};

export type News = {
  id: string,
  title: string,
  content: string,
  date: string,
  image: string,
};

export type Library = {
  title: string,
  type: string,
};

export type City = {
  id: number,
  name: string,
};

export type Employee = {
  id: number,
  name: string,
  department: string,
  position: string,
  phone: string,
  email: string,
  password: string,
};

export type DepartmentType = {[key: string]: number[][]};
