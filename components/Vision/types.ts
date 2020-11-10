export interface ObjectiveProps {
  id: string;
  title: string;
  weight: number;
  remark: string;
  keyResults: KeyResultProps[];
}

export interface KeyResultProps {
  id: string;
  title: string;
  weight: number;
  total: number;
  remark: string;
  current: number;
}

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export type ExcludeFunction<T> = Pick<T, NonFunctionPropertyNames<T>>;
