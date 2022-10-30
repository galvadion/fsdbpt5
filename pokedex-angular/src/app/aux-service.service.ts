import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuxServiceService {

  constructor() { }

  getNumber(number: number): String {
    return number.toString().padStart(3,'0')
  }
  toLowerCase(string: String): String {
    return string.toLowerCase()
  }
}
