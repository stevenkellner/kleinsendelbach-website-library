import { TestBed } from '@angular/core/testing';

import { KleinsendelbachWebsiteLibraryService } from './kleinsendelbach-website-library.service';

describe('KleinsendelbachWebsiteLibraryService', () => {
  let service: KleinsendelbachWebsiteLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KleinsendelbachWebsiteLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
