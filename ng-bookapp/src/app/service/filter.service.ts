import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private searchString = new BehaviorSubject<string>('');
  searchText = this.searchString.asObservable();
  constructor() { }

  searchFilter(searchtxt: string) {
    this.searchString.next(searchtxt);
  }
}