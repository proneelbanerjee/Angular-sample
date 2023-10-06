import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject<string>('Message Sent');
  currentMessage = this.messageSource.asObservable().pipe(debounceTime(300));

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
