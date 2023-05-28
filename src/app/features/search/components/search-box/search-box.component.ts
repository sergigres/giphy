import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: [ './search-box.component.scss' ]
})
export class SearchBoxComponent {
  searchText = '';
  searchForm: FormGroup;
  @Output() searchChange = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { 
    this.searchForm = new FormGroup({
      query: new FormControl()
  });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log("Submitting form: ", this.searchForm.value);
      this.searchChange.emit(this.searchForm.value.query);
    }
  }

  onKeyUp() {
    if (this.searchForm.valid && this.searchForm.value.query && this.searchForm.value.query.length > 3) {
      console.log("Submitting form: ", this.searchForm.value);
      this.searchChange.emit(this.searchForm.value.query);
    }
  }
}
