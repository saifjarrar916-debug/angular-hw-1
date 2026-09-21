import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books = [
    {
      id: 1,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien'
    },
    {
      id: 2,
      title: 'Harry Potter',
      author: 'J.K. Rowling'
    },
    {
      id: 3,
      title: 'The Alchemist',
      author: 'Paulo Coelho'
    }
  ];

  getAll(): Observable<any[]> {
    return of(this.books);
  }

  getById(id: number): Observable<any | undefined> {
    return of(this.books.find(book => book.id === id));
  }
}