import { Component, Input } from "@angular/core";
import { Gif } from "src/app/core/models/gif";


@Component({
    selector: 'app-gif-list',
    templateUrl: './gif-list.component.html',
    styleUrls: [ './gif-list.component.scss' ]
  })
  export class GifListComponent {
    constructor() {}
    notification = '';

    @Input() data: Gif[] = [];

    toClipboard(e: Event, gif: Gif) {
      navigator.clipboard.writeText(gif.embed_url || '').then(() => {
        this.notification = 'GIF URL copied to clipboard';
        const that = this;
        setTimeout(function(){
          that.notification = '';
      }, 2000);
      })
    }
}
