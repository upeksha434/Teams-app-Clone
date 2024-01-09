import { Component ,OnInit} from '@angular/core';
import { ChatDetailService } from 'src/app/shared/chat-detail.service';
import '@cds/core/icon/register.js';
import { ClarityIcons,trashIcon,replayAllIcon,pencilIcon, userIcon, circleIcon  } from '@cds/core/icon';
import { ChatDetail, ReplyDetail } from 'src/app/shared/chat-detail.model';
import { NgForm } from '@angular/forms';
import { id } from '@cds/core/internal';

ClarityIcons.addIcons(trashIcon ,replayAllIcon,pencilIcon,userIcon,circleIcon);
@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {

  constructor(public service:ChatDetailService){

  }
  ngOnInit(): void {
    this.service.refreshList();
    this.service.refreshListReply();
  }

  populateForm(selectedRecord:ChatDetail){
    this.service.formData=Object.assign({},selectedRecord)
  }
  

  onDelete(id:number){
    if(confirm('Delete post?'))
    this.service.deleteMsgDetail(id)
    .subscribe({
      next:res=>{
        this.service.list=res as ChatDetail[]
      
      },
      error:err=>{console.log(err)}
    })
  }


  onDeleteReply(id:any){
    if(confirm('delete Reply?'))
    this.service.deleteReplyDetail(id.id)
  .subscribe({
    next:res=>{
      console.log(res)
      location.reload();
    },
    error:err=>{
      console.log(err);
      console.log(id.id,"this is passing object",typeof(id))
    }
  })
  }
  onShowReply(id:number){
    this.service.ShowReply(id);
    //console.log(this.service.ShowReply(id))
  }
 
 
  replyFieldVisibility:{[chatmsgId:number]:boolean}={}
  replyMessageChatId:number=0;

  toggleReplyField(chatmsgId:number):void{
    this.replyFieldVisibility[chatmsgId]=!this.replyFieldVisibility[chatmsgId];
    if(this.replyFieldVisibility[chatmsgId]){
      this.replyMessageChatId=chatmsgId;

    }else{
      this.replyMessageChatId=0;
    }
  }
  






  onSubmitReply(form:NgForm,chatmsgId:number){
    this.replyFieldVisibility[chatmsgId]=false;
    this.replyMessageChatId=0;
    console.log(chatmsgId,'chat msg id')
    
    const replyDetail = new ReplyDetail();
    var message=this.service.replyFormData.message
    replyDetail.setChatmsgId(chatmsgId,message);
    
    console.log(replyDetail,"new reply detail")
    
    console.log(this.service.replyFormData,"the form")

    this.service.PostReply(replyDetail)
    .subscribe({
      next:res=>{
        console.log(res)
        this.service.refreshListReply()
        //this.service.replyMessages=res as { [chatmsgId: number]: {}}
        // console.log(".........................",this.service.replyMessages)
        
      },
      error:err=>{console.log(err)}
    })

   

  }

}


