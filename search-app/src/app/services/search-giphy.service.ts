import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class SearchGiphyService {

  constructor(private http: Http) { }

  searchGiphy(searchText: string){
  	let urlSearchParams = new URLSearchParams();

  	urlSearchParams.set('api_key', 'q1w1t9XU43bU7R5UnN7E2iwGFWJPgssA');
  	urlSearchParams.set('q', searchText);
    urlSearchParams.set('limit', '5');
    urlSearchParams.set('offset', '0');
    urlSearchParams.set('rating', 'G');
    urlSearchParams.set('lang', 'en');

    return this.http
      .get('https://api.giphy.com/v1/gifs/search', { params: urlSearchParams })
      .toPromise()
      .then((response) => response.json());





  }

}
