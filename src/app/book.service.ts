import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from './book';
import { BOOKS } from './mock-books';
import { MessageService } from './message.service';

@Injectable()
export class BookService {

  constructor(private messageService: MessageService) { }

  // getBooks method has a synchronous signature, which implies that the
  // BookService can fetch heroes synchronously.
  getBooks(): Observable<Book[]> {
    // Todo: send the message after fetching the books
    this.messageService.add('BookService: fetched books');
    return of(BOOKS);
  }


}
