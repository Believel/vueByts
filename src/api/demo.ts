import axios from './vhttp';
interface Package<T> {
  endDate: string;
  name: {
    en: string,
    zh: string,
  };
  poster: string;
  startDate: string;
  tag: string;
  timeDescription: string;
  totalUnits: number;
  type: string;
  _id: string;
  units: T[];
}
export interface Unit {
  classroom: {
    id: string,
    instructor: string,
  };
  course: [];
  duration: number;
  endDate: string;
  startDate: string;
  name: {
    en: string,
    zh: string,
  };
  poster: string;
  progress: {
    finished: number,
    started: number,
    total: number,
    touched: boolean,
    visited: number,
  };
  state: string;
  type: string;
  visited: boolean;
  _id: string;
}
export interface Units {
  package: Package<Unit>;
  result: string;
}

export async function getUnits(id: string) {
  const response = await axios.get<Units>(`/self/packages/${id}/units`);
  return (response.data) as Units;
}
