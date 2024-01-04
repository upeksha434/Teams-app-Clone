import { Component } from '@angular/core';
import { ChatDetailService } from '../shared/chat-detail.service';
import { NgForm } from '@angular/forms';
import { ChatDetail } from '../shared/chat-detail.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  constructor(public service:ChatDetailService){

  }

  onSubmit(form:NgForm){
    if(this.service.formData.chatmsgId==0){
      this.insertRecord(form)
    }
    else{
      this.updateRecord(form)
    }

  }


  insertRecord(form:NgForm){
    this.service.postMsgDetail()
    .subscribe({
      next:res=>{
        this.service.list=res as ChatDetail[]
        this.service.resetForm(form)
      },
      error:err=>{console.log(err)}
    })
  }
  updateRecord(form:NgForm){
    this.service.putMsgDetail()
    .subscribe({
      next:res=>{
        this.service.list=res as ChatDetail[]
        this.service.resetForm(form)
      },
      error:err=>{console.log(err)}
    })
  }
}
