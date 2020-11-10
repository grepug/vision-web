import type moment from "moment";

export function uniq<T>(arr: T[], keyName: keyof T) {
  let newArr: T[] = [];

  for (const el of arr) {
    const isIn = newArr.some((el2) => el2[keyName] === el[keyName]);
    if (!isIn) {
      newArr.push(el);
    }
  }

  return newArr;
}

export function findLastIndex<T>(arr: T[], predicate: (obj: T) => boolean) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    const isEqual = predicate(el);
    const isNextEqual = arr[i + 1] ? predicate(arr[i + 1]) : false;

    if (isEqual && !isNextEqual) {
      index = i;
      break;
    }
  }

  return index;
}

export function formatDate(date: moment.Moment) {
  return date.format("YYYY/MM/DD");
}
