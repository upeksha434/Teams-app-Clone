import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChatDetailService } from 'src/app/shared/chat-detail.service';
import { ChatDetail, ReplyDetail } from 'src/app/shared/chat-detail.model';

describe('ChatDetailService', () => {
  let service: ChatDetailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatDetailService]
    });
    service = TestBed.inject(ChatDetailService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve main messages from API', () => {
    const mockMainMessages: ChatDetail[] = [
      // Your mock main messages here
    ];

    service.refreshList();

    const req = httpMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMainMessages);

    expect(service.list).toEqual(mockMainMessages);
  });

  it('should retrieve reply messages from API', () => {
    const mockReplyMessages: ReplyDetail[] = [
      // Your mock reply messages here
    ];

    service.refreshListReply();

    const req = httpMock.expectOne(`${service.url2}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockReplyMessages);

    expect(service.list2).toEqual(mockReplyMessages);
  });

  // Add more test cases for other methods like postMsgDetail, putMsgDetail, deleteMsgDetail, etc.

});

