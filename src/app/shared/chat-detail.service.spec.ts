import { TestBed } from '@angular/core/testing';

import { ChatDetailService } from './chat-detail.service';

describe('ChatDetailService', () => {
  let service: ChatDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
