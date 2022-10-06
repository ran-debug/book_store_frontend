import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: any[] = [];
  constructor(private data : DataserviceService) { }

  ngOnInit(): void {
    this.data.booklist().subscribe((response:any) => 
    this.books = response);
  }
  
}
