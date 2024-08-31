import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsserChatComponent } from "./usser-chat/usser-chat.component";
import { ChatRoomComponent } from "./chat-room/chat-room.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsserChatComponent, ChatRoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
