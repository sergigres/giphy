import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Gif } from 'src/app/core/models/gif';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.scss' ]
})
export class SearchComponent {

  constructor(private searchService: SearchService) { }
  data: Gif[] = [];

  search(query: string) {
    this.searchService.search(query).subscribe((data) => {
      console.log(data);
      this.data = data.data;
    });
  }
}
