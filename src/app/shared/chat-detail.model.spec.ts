import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChatDetail, ReplyDetail } from './chat-detail.model'; // Replace with the actual path to your model file

describe('ChatDetail', () => {
  it('should create an instance', () => {
    const chatDetail = new ChatDetail();
    expect(chatDetail).toBeTruthy();
  });

  it('should have default values', () => {
    const chatDetail = new ChatDetail();
    expect(chatDetail.chatmsgId).toEqual(0);
    expect(chatDetail.chatmsg).toEqual('');
    expect(chatDetail.msgDate).toEqual(new Date().toLocaleString());
  });
});

describe('ReplyDetail', () => {
  it('should create an instance', () => {
    const replyDetail = new ReplyDetail();
    expect(replyDetail).toBeTruthy();
  });

  it('should have default values', () => {
    const replyDetail = new ReplyDetail();
    expect(replyDetail.id).toEqual(0);
    expect(replyDetail.message).toEqual('');
    expect(replyDetail.date).toEqual(new Date().toLocaleString());
    expect(replyDetail.chatmsgId).toEqual(0);
  });

  it('should set chatmsgId and message', () => {
    const replyDetail = new ReplyDetail();
    replyDetail.setChatmsgId(1, 'Test Message');
    expect(replyDetail.chatmsgId).toEqual(1);
    expect(replyDetail.message).toEqual('Test Message');
  });
});
