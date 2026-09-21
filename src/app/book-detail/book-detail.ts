import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../services/book';

@Component({
  selector: 'app-book-detail',
  imports: [RouterLink],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {

  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.getById(id).subscribe(data => {
      this.book = data;
    });
  }

}