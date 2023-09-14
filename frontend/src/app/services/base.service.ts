import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  sortArrayByFieldAndOrder(array: any, field: string, order: string) {
    return array.sort((a: any, b: any) => {
      return ['weight', 'yearModel'].includes(field) ?
        (
          order === 'asc' ?
          a[field] - b[field] :
          b[field] - a[field]
        ) :
        (
          a[field] > b[field] ?
          (
            order === 'asc' ?
            1 :
            -1
          ) :
          (
            order === 'asc' ?
            -1 :
            1
          )
        )
    })
  }
}
