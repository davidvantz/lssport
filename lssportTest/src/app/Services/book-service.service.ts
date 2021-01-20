import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {bookList} from '../Content/BookList.json';
import { bookInfo } from '../Models/BookModel';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  bSubject = new BehaviorSubject([]); 
  localBookList:bookInfo[]=[];
  filteredBookList :bookInfo[]=[];
  constructor() {
    this.localBookList = JSON.parse(JSON.stringify(bookList))
    this.filteredBookList = JSON.parse(JSON.stringify(bookList))
   }

  getBookList(){
     return this.filteredBookList;
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
    this.initialFilterBook();
    this.bSubject.next(this.filteredBookList);

  }
  addBook(newBook:bookInfo){
    newBook["Id"] = this.localBookList.length+1;
    this.localBookList.push(newBook);
    this.initialFilterBook();
    this.bSubject.next(this.filteredBookList);


  }
  removeBook(id:number){
    let removedBook = this.localBookList.find(f=>f.Id==id);
    this.localBookList.splice(this.localBookList.indexOf(removedBook),1);
    this.initialFilterBook();
    this.bSubject.next(this.filteredBookList);

  }
  filterList(filter:string){
    this.filteredBookList = this.localBookList.filter(f=>f.BookName.toLowerCase().includes(filter.toLowerCase()))
    this.bSubject.next(this.filteredBookList);
  }
  initialFilterBook(){
    this.filteredBookList = this.localBookList;

  }
}
