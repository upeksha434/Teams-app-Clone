export class ChatDetail {
    chatmsgId:number=0;
    chatmsg:string="";
    msgDate:string=new Date().toLocaleString();

}
export class ReplyDetail{
    id:number=0;
    message:string="";
    date:string="";
    chatmsgId:number=0;
    chatDetail:any=null;



}
// [
//     {
//       "chatmsgId": 0,
//       "chatmsg": "string",
//       "msgDate": "string"
//     }
//   ]

// {
//     "id": 1,
//     "message": "hi",
//     "date": "today",
//     "chatmsgId": 2,
//     "chatDetail": null
//   },