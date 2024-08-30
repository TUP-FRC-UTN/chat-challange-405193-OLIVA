import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsserChatComponent } from "./usser-chat/usser-chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsserChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  chatHistory:string[] = [];

  reciveMsj(msj:string){
    console.log(msj);
    this.chatHistory.push(msj);
    console.log(this.chatHistory);
  }
}
