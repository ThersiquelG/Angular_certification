import { TestBed } from '@angular/core/testing';

import { FormcharacterServiceService } from './formcharacter-service.service';

describe('FormcharacterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormcharacterServiceService = TestBed.get(FormcharacterServiceService);
    expect(service).toBeTruthy();
  });
});
