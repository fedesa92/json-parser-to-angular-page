import { Injectable } from '@angular/core';

//exit point to his mfe
@Injectable({
  providedIn: 'root'
})
export class BusinessLogicService {
  hello: () => void;
  
  constructor() {
    this.hello = () => { console.log('hello') };
  }

}
