import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  active: string[] = []
  inactive: string[] = []

  constructor() { }

  logActiveUsers(arr: string []) {
    this.active = arr
  }

  logInactiveUsers(arr: string []) {
    console.log('Inactive users: ', this.inactive)
  }
}
