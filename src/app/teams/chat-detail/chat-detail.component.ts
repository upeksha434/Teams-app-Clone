import { Component ,OnInit} from '@angular/core';
import { ChatDetailService } from 'src/app/shared/chat-detail.service';
import '@cds/core/icon/register.js';
import { ClarityIcons,trashIcon,replayAllIcon,pencilIcon, userIcon  } from '@cds/core/icon';
import { ChatDetail } from 'src/app/shared/chat-detail.model';

ClarityIcons.addIcons(trashIcon ,replayAllIcon,pencilIcon,userIcon);
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
  onShowReply(id:number){
    this.service.ShowReply(id);
    //console.log(this.service.ShowReply(id))
  }

}
