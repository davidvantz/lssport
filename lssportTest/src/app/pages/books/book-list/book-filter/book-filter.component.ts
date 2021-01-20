import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.scss']
})
export class BookFilterComponent implements OnInit {
  filterText:string="";
  constructor(private BooksService:BookServiceService) { }

  ngOnInit(): void {
  }
  filterBookList(event){
    console.log(event);
    this.BooksService.filterList(event);
  }
}
