import { Component } from '@angular/core';
import { UsserChatComponent } from "../usser-chat/usser-chat.component";

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [UsserChatComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent {
  user1:string = 'Max'
  user2:string = 'Steel'
  chatHistory:{user:string, msj:string}[] = []

  reciveMsj(msj:{user:string, msj:string}){
    console.log(msj);
    this.chatHistory.push(msj);
    console.log(this.chatHistory);
  }
}
