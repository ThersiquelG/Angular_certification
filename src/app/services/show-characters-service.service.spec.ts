import { TestBed } from '@angular/core/testing';

import { ShowCharactersServiceService } from './show-characters-service.service';

describe('ShowCharactersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowCharactersServiceService = TestBed.get(ShowCharactersServiceService);
    expect(service).toBeTruthy();
  });
});
