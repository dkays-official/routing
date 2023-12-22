import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoragemanagementService {

  constructor() { }
  public setData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  
  public getData(key: string) {
    return localStorage.getItem(key)
  }
}
