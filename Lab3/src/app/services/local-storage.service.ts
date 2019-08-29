import { Injectable } from '@angular/core';
import { Person } from '../models/Person';
import { Data } from '../mocks/default';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  static initLocalStoragePersonArray() {
    if (!localStorage.getItem('personArray')) {
      localStorage.setItem('personArray', JSON.stringify(Data.people));
    }
  }

  static getLocalStoragePersonArray() {
    this.initLocalStoragePersonArray();
    return JSON.parse(localStorage.getItem('personArray'));
  }

  static setLocalStoragePersonArray(array: Person[]) {
    this.initLocalStoragePersonArray();
    localStorage.setItem('personArray', JSON.stringify(array));
  }

}
