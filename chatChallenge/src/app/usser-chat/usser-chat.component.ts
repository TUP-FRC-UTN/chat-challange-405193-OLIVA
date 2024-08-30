import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usser-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usser-chat.component.html',
  styleUrl: './usser-chat.component.css'
})
export class UsserChatComponent {
  @Output() msjEmmiter = new EventEmitter<string>();
  msj:string = "";

  sendMsj(){
    this.msjEmmiter.emit(this.msj);
    this.msj = "";
  }
}
