import {Injectable} from '@angular/core';
import {Book} from '../types/book';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
  bookApiUrl: string = 'app/books';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor() {
  }

  getBooks(): Observable<Book[]> {
    throw new Error('not implemented');
  }

  update(book: Book): Observable<Book> {
    const url = `${this.bookApiUrl}/${book.id}`;
    throw new Error('not implemented');
  }

  create(title: string): Observable<Book> {
    throw new Error('not implemented');

  }

  delete(id: number): Observable<void> {
    const url = `${this.bookApiUrl}/${id}`;
    throw new Error('not implemented');
  }


  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

  getBook(id: number): Observable<Book> {
    throw new Error('not implemented');
  }
}
