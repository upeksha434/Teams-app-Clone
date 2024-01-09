import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { ChatDetailComponent } from './chat-detail.component';
import { ChatDetailService } from 'src/app/shared/chat-detail.service';
import { of } from 'rxjs';
import { ChatDetail, ReplyDetail } from 'src/app/shared/chat-detail.model';

describe('ChatDetailComponent', () => {
  let component: ChatDetailComponent;
  let fixture: ComponentFixture<ChatDetailComponent>;
  let chatDetailServiceSpy: jasmine.SpyObj<ChatDetailService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ChatDetailService', [
      'refreshList',
      'refreshListReply',
      'deleteMsgDetail',
      'deleteReplyDetail',
      'ShowReply',
      'toggleReplyField',
      'PostReply',
    ]);

    TestBed.configureTestingModule({
      declarations: [ChatDetailComponent],
      imports: [FormsModule],
      providers: [{ provide: ChatDetailService, useValue: spy }],
    });

    fixture = TestBed.createComponent(ChatDetailComponent);
    component = fixture.componentInstance;
    chatDetailServiceSpy = TestBed.inject(ChatDetailService) as jasmine.SpyObj<ChatDetailService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call refreshList and refreshListReply on ngOnInit', () => {
    chatDetailServiceSpy.refreshList.and.returnValue();
    chatDetailServiceSpy.refreshListReply.and.returnValue();

    component.ngOnInit();

    expect(chatDetailServiceSpy.refreshList).toHaveBeenCalled();
    expect(chatDetailServiceSpy.refreshListReply).toHaveBeenCalled();
  });

  it('should call deleteMsgDetail on onDelete', fakeAsync(() => {
    chatDetailServiceSpy.deleteMsgDetail.and.returnValue(of([]));

    spyOn(window, 'confirm').and.returnValue(true);

    component.onDelete(1);
    tick();

    expect(chatDetailServiceSpy.deleteMsgDetail).toHaveBeenCalledWith(1);
  }));

  // it('should call deleteReplyDetail and reload the page on onDeleteReply', fakeAsync(() => {
  //   chatDetailServiceSpy.deleteReplyDetail.and.returnValue(of([]));

  //   spyOn(window, 'confirm').and.returnValue(true);

  //   component.onDeleteReply({ id: 1 });
  //   tick();

  //   expect(chatDetailServiceSpy.deleteReplyDetail).toHaveBeenCalledWith(1);
  //   expect(window.location.reload).toHaveBeenCalled();
  // }));

  it('should call ShowReply on onShowReply', () => {
    chatDetailServiceSpy.ShowReply.and.returnValue(of([]));

    component.onShowReply(1);

    expect(chatDetailServiceSpy.ShowReply).toHaveBeenCalledWith(1);
  });

  it('should toggle reply field visibility on toggleReplyField', () => {
    component.replyFieldVisibility = { 1: false };

    component.toggleReplyField(1);

    expect(component.replyFieldVisibility[1]).toBe(true);

    component.toggleReplyField(1);

    expect(component.replyFieldVisibility[1]).toBe(false);
  });

  it('should call PostReply and refreshListReply on onSubmitReply', fakeAsync(() => {
    //chatDetailServiceSpy.replyFieldVisibility = { 1: true };
    //chatDetailServiceSpy.replyMessageChatId = 1;
    chatDetailServiceSpy.replyFormData = { message: 'Test Message' } as ReplyDetail;
    chatDetailServiceSpy.PostReply.and.returnValue(of([]));

    const form = { resetForm: () => {} } as NgForm;

    component.onSubmitReply(form, 1);
    tick();

    expect(chatDetailServiceSpy.PostReply).toHaveBeenCalled();
    expect(chatDetailServiceSpy.refreshListReply).toHaveBeenCalled();
    //expect(chatDetailServiceSpy.replyFieldVisibility[1]).toBe(false);
    //expect(chatDetailServiceSpy.replyMessageChatId).toBe(0);
  }));
});
