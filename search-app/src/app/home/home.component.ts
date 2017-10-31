import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from '../services/search-history.service';
import { SearchWikiService } from '../services/search-wiki.service';
import { SearchGiphyService } from '../services/search-giphy.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: string;
  wikiSearchResults = [];
  giphySearchResults = [];

  	constructor(
      private searchHistoryService: SearchHistoryService,
    	private searchWikiService: SearchWikiService,
    	private searchGiphyService: SearchGiphyService) { }

  	ngOnInit() { }

  	searchWiki() {
    	this.resetSearchResults();
    	this.searchHistoryService.addToSearchHistory(this.searchText + ' - Wiki search - ' + this.getTimeStamp());
    	this.searchWikiService.searchWiki(this.searchText).then(searchResults => this.wikiSearchResults = searchResults);
  	}

  	searchGiphy() {
    	this.resetSearchResults()
    	this.searchHistoryService.addToSearchHistory(this.searchText + ' - Giphy search - ' + this.getTimeStamp());
    	this.searchGiphyService.searchGiphy(this.searchText).then(searchResults => this.giphySearchResults = searchResults.data);
  	}

  	getTimeStamp(): string {
    	return (new Date().toUTCString());
  	}

  	resetSearchResults() {
      this.wikiSearchResults = [];
  	  this.giphySearchResults = [];
  	}

}
