import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import { BooksComponent } from './pages/books/books.component';
import { BookListComponent } from './pages/books/book-list/book-list.component';
import { BookListItemComponent } from './pages/books/book-list/book-list-item/book-list-item.component';
import { HeaderComponent } from './header/header.component';
import { BookAddComponent } from './pages/books/book-add/book-add.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { BookFilterComponent } from './pages/books/book-list/book-filter/book-filter.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    BookListItemComponent,
    HeaderComponent,
    BookAddComponent,
    BookDetailsComponent,
    BookFilterComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
