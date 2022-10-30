import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuxServiceService {

  constructor() { }

  sortedById = new BehaviorSubject<boolean>(false)

  getNumber(number: number): String {
    return number.toString().padStart(3,'0')
  }
  toLowerCase(string: String): String {
    return string.toLowerCase()
  }

  capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
