import { TestBed } from '@angular/core/testing';

import { RouteGauardService } from './route-gauard.service';

describe('RouteGauardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGauardService = TestBed.get(RouteGauardService);
    expect(service).toBeTruthy();
  });
});
