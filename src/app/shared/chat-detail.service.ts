import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ChatDetail, ReplyDetail } from './chat-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ChatDetailService {

  url:string = environment.apiBaseUrl + '/ChatDetail'
  url2:string =environment.apiBaseUrl + '/Replymsgs'
  list:ChatDetail[]=[]
  list2:ReplyDetail[]=[]
  replyMessages: { [chatmsgId: number]: {}} = {};
  formData:ChatDetail=new ChatDetail()
  //http://localhost:5174/api/ChatDetail
  constructor(private http:HttpClient) { }

  refreshListReply(){
    this.http.get(this.url2)
    .subscribe({
      next:res=>{
        this.list2=res as ReplyDetail[];
        console.log(this.list2,"this is list....");
        
        this.list2.forEach(element => {
          console.log(element);
          if (!this.replyMessages[element.chatmsgId]) {
            this.replyMessages[element.chatmsgId] = [];
          }

          const reply = {
          message: element.message,
          time: element.date
        };
  
          // Append to the list
          (this.replyMessages[element.chatmsgId] as any[]).push(reply);
        });
        
        // console.log(this.replyMessages,"reply message list");
        
        // console.log(this.replyMessages[2],"with id 2")
        // const repliesForChatmsgId2: string[] = this.replyMessages[2] as string[];
        // console.log("new array",repliesForChatmsgId2[0])

        // repliesForChatmsgId2.forEach((reply, index) => {
        // console.log(`Reply ${index + 1}: ${reply}`);})
        
        

      },
      error:err=>{console.log(err)}
    });
  }
  
  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next:res=>{
        this.list=res as ChatDetail[];
        
      },
      error:err => {console.log(err)}
    })
  }
  postMsgDetail(){
    return this.http.post(this.url,this.formData)
  }


  putMsgDetail(){
    return this.http.put(this.url+'/'+this.formData.chatmsgId,this.formData)
  }

  deleteMsgDetail(id:number){
    return this.http.delete(this.url+'/'+id)
  }


  resetForm(form:NgForm){
    form.form.reset()
    this.formData=new ChatDetail()
  }
  // refreshList(){
  //   this.http.get(this.url)
  //   .subscribe({
  //     next:res=>{
  //       this.list=res as ChatDetail[];
        
  //     },
  //     error:err => {console.log(err)}
  //   })
  // }
  // ShowReply(id: number) {
  //   this.http.get(this.url2 + '/' + id).subscribe(
  //     (data) => {
        
  //       this.list2=data as ReplyDetail[];
        
  //       this.list2.forEach(element => {
  //         if(element.chatmsgId==id){
  //           console.log(element.message,element.id)
  //         }
          
  //       });
        
  //     },
      
  //   );
  // }

  ShowReply(id:number){
    
    if (this.replyMessages.hasOwnProperty(id)) {
  
      const repliesForSpecificChatmsgId = this.replyMessages[id];
      return(repliesForSpecificChatmsgId);
    } else {
    console.log(`No replies for chatmsgId ${id}`);
    return ;
    }
  }
  
}
