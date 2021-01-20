import { Component, OnInit, ViewChild } from '@angular/core';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  @ViewChild("BookName") BookName:any;
  @ViewChild("AutherName") AutherName:any;
  @ViewChild("PublicationDate") PublicationDate:any;
  @ViewChild("CoverPhoto") CoverPhoto:any;
  @ViewChild("CatalogNumber") CatalogNumber:any;
  constructor(private BooksService:BookServiceService) { }

  ngOnInit(): void {
  }
  submit(){
    let editBookDetails = {
      BookName:this.BookName.nativeElement.value,
      AutherName:this.AutherName.nativeElement.value,
      PublicationDate:this.PublicationDate.nativeElement.value,
      CoverPhoto:this.CoverPhoto.nativeElement.value,
      CatalogNumber:this.CatalogNumber.nativeElement.value,
    }
    console.log(editBookDetails);
    this.BooksService.addBook(editBookDetails);
  }
}
