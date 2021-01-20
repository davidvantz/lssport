import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './pages/books/book-add/book-add.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "books",
        component:BooksComponent,
        children:[
          {
            path:'new',component:BookAddComponent
          },{
          path:':id', component:BookDetailsComponent
        }
       
      ]
      },
      { path: "**", redirectTo: "books", pathMatch: "full" },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
