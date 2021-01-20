import { Injectable } from '@angular/core';
import {bookList} from '../Content/BookList.json';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  localBookList:any[]=[];
  constructor() {
    this.localBookList = JSON.parse(JSON.stringify(bookList))
   }

  getBookList(){
     return this.localBookList;
  }
  getBookById(bookId:number){
    return this.localBookList.find(f=>f.Id==bookId);
  }
  editBook(id:number,editBook:any){
    let book = this.localBookList.find(b=>b.Id==id);
    book.BookName = editBook.BookName;
    book.AutherName = editBook.AutherName;
    book.PublicationDate = editBook.PublicationDate;
    book.CoverPhoto = editBook.CoverPhoto;
    book.CatalogNumber = editBook.CatalogNumber;
  }
  addBook(newBook:any){
    newBook["Id"] = this.localBookList.length+1;
    this.localBookList.push(newBook);
  }
  removeBook(id:number){
    let removedBook = this.localBookList.find(f=>f.Id=id);
    this.localBookList.splice(this.localBookList.indexOf(removedBook),1)
  }
}
