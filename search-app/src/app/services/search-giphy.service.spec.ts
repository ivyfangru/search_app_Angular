import { TestBed, inject } from '@angular/core/testing';

import { SearchGiphyService } from './search-giphy.service';

describe('SearchGiphyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchGiphyService]
    });
  });

  it('should be created', inject([SearchGiphyService], (service: SearchGiphyService) => {
    expect(service).toBeTruthy();
  }));
});
