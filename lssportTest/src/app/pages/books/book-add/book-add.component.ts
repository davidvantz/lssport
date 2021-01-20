import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  BookFormGroup:FormGroup = this.fb.group({});

  constructor(private BooksService:BookServiceService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.BookFormGroup = this.fb.group({
      BookName:new FormControl("",Validators.required),
      AutherName:new FormControl("",Validators.required),
      PublicationDate:new FormControl("",Validators.required),
      CoverPhoto:new FormControl("",Validators.required),
      CatalogNumber:new FormControl("",Validators.required),
    })
  }
  addNewBook(){

    this.BooksService.addBook(this.BookFormGroup.value);
    this.BookFormGroup.reset();
  }
}
