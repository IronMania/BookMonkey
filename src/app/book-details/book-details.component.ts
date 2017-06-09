import { BookFactory } from './../shared/book-factory';
import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book = BookFactory.empty();
getRating(num: number) {
  return new Array(num);
}
  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 ngOnInit() {
  const params = this.route.snapshot.params;
  this.bs.getSingle(params['isbn']).subscribe(b => this.book = b);
 }

 removeBook(){
   if(confirm('Buch wirklich löschen?')){
     this.bs.remove(this.book.isbn).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
   }
 }
}
