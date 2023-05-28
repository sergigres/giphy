import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './search-routing.module';
import { SearchService } from './services/search.service';
import { SearchComponent } from './components/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GifListComponent } from './components/gif-list/gif-list.component';


@NgModule({
  providers: [
    SearchService
  ],
  declarations: [
    SearchComponent,
    SearchBoxComponent,
    GifListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
