import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  BookDetails:any;
  BookFormGroup:any;
  name = new FormControl('');
  @ViewChild("BookName") BookName:any;
  @ViewChild("AutherName") AutherName:any;
  @ViewChild("PublicationDate") PublicationDate:any;
  @ViewChild("CoverPhoto") CoverPhoto:any;
  @ViewChild("CatalogNumber") CatalogNumber:any;
  constructor(private route:ActivatedRoute,private BooksService:BookServiceService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(par=>{
      this.BookDetails =  this.BooksService.getBookById(par["id"]);
      // this.BookFormGroup = this.fb.group({
      //   BookName:new FormControl(this.BookDetails.BookName,Validators.required),
      //   AutherName:new FormControl(this.BookDetails.AutherName,Validators.required),
      //   PublicationDate:new FormControl(this.BookDetails.PublicationDate,Validators.required),
      //   CoverPhoto:new FormControl(this.BookDetails.CoverPhoto,Validators.required),
      //   CatalogNumber:new FormControl(this.BookDetails.CatalogNumber,Validators.required),
      // })
    })
  }
  submit(){
    let editBookDetails = {
      BookName:this.BookName.nativeElement.value,
      AutherName:this.AutherName.nativeElement.value,
      PublicationDate:this.PublicationDate.nativeElement.value,
      CoverPhoto:this.CoverPhoto.nativeElement.value,
      CatalogNumber:this.CatalogNumber.nativeElement.value,
    }
    this.BooksService.editBook(this.BookDetails.Id,editBookDetails);
  }

}
