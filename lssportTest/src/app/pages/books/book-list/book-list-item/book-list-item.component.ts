import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {
  @Input("Book") Book:any;
  constructor(private BooksService:BookServiceService) { }

  ngOnInit(): void {
  }
  removeBook(book:any){
    this.BooksService.removeBook(book.Id);
  }
}
