import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { bookInfo } from 'src/app/Models/BookModel';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  BookDetails:bookInfo;
  BookFormGroup:FormGroup = this.fb.group({});
  name = new FormControl('');
  constructor(private route:ActivatedRoute,private BooksService:BookServiceService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(par=>{
      this.BookDetails =  this.BooksService.getBookById(par["id"]);
      this.BookFormGroup = this.fb.group({
        BookName:new FormControl(this.BookDetails.BookName,Validators.required),
        AutherName:new FormControl(this.BookDetails.AutherName,Validators.required),
        PublicationDate:new FormControl(this.BookDetails.PublicationDate,Validators.required),
        CoverPhoto:new FormControl(this.BookDetails.CoverPhoto,Validators.required),
        CatalogNumber:new FormControl(this.BookDetails.CatalogNumber,Validators.required),
      })
    })
  }
  editBook(){
    this.BooksService.editBook(this.BookDetails.Id,this.BookFormGroup.value);
  }

}
