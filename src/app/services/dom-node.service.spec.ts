import { TestBed, inject } from '@angular/core/testing';

import { DomNodeService } from './dom-node.service';

describe('DomNodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomNodeService]
    });
  });

  it('should be created', inject([DomNodeService], (service: DomNodeService) => {
    expect(service).toBeTruthy();
  }));
});
