import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChatDetailService } from './chat-detail.service';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

describe('ChatDetailService', () => {
  let service: ChatDetailService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],  // Add HttpClientModule
      providers: [ChatDetailService],
    });

    service = TestBed.inject(ChatDetailService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ... Other test cases go here
});
