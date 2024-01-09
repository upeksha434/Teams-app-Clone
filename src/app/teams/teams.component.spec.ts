import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsComponent } from './teams.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChatDetailService } from '../shared/chat-detail.service';
import { of } from 'rxjs';
import { ChatDetail } from '../shared/chat-detail.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;
  let chatDetailServiceSpy: jasmine.SpyObj<ChatDetailService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ChatDetailService', ['postMsgDetail', 'putMsgDetail', 'resetForm']);
    
    TestBed.configureTestingModule({
      declarations: [TeamsComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: ChatDetailService, useValue: spy }],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    });
    

    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    chatDetailServiceSpy = TestBed.inject(ChatDetailService) as jasmine.SpyObj<ChatDetailService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should insert record', () => {
  //   const form = {} as any;
  //   chatDetailServiceSpy.postMsgDetail.and.returnValue(of([{ chatmsgId:1,chatmsg:"fhshfk",msgDate:"2/3/2024" }] as ChatDetail[]));

  //   component.onSubmit(form);

  //   expect(chatDetailServiceSpy.postMsgDetail).toHaveBeenCalledOnceWith();
  //   expect(chatDetailServiceSpy.resetForm).toHaveBeenCalledWith(form);
  // });

  it('should update record', () => {
    const form = {} as any;
    chatDetailServiceSpy.formData = {chatmsgId:1,chatmsg:"fhshfk",msgDate:"2/3/2024"}; // Set a chatmsgId to simulate update
    chatDetailServiceSpy.putMsgDetail.and.returnValue(of([{ chatmsgId:1,chatmsg:"fhshfk",msgDate:"2/3/2024"}] as ChatDetail[]));

    component.onSubmit(form);

    expect(chatDetailServiceSpy.putMsgDetail).toHaveBeenCalledOnceWith();
    expect(chatDetailServiceSpy.resetForm).toHaveBeenCalledWith(form);
  });
});
