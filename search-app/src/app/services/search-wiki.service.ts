import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams} from '@angular/http';

@Injectable()
export class SearchWikiService {

  constructor(private jsonp: Jsonp) { }

  searchWiki (searchText: string){
  	let urlSearchParams = new URLSearchParams();
  	urlSearchParams.set('action', 'opensearch');
  	urlSearchParams.set('search', searchText);
  	urlSearchParams.set('format', 'json');

  	return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK',{ params: urlSearchParams })
      .toPromise()
      .then((response) => response.json()[1]);

  }

}
