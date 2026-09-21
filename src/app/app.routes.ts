import { Routes } from '@angular/router';
import { Books } from './books/books';
import { BookDetail } from './book-detail/book-detail';

export const routes: Routes = [
  {
    path: 'books',
    component: Books
  },
  {
    path: 'books/:id',
    component: BookDetail
  }
];