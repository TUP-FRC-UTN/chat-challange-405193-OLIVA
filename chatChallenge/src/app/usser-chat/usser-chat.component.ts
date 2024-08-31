import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usser-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usser-chat.component.html',
  styleUrl: './usser-chat.component.css'
})
export class UsserChatComponent {
  @Input() user!:string
  @Output() msjEmmiter = new EventEmitter<{
    user:string,
    msj:string
  }>();
  
  msj:string = ''

  sendMsj(){
    if(this.msj.trim()){
      this.msjEmmiter.emit({ user: this.user, msj: this.msj})
      this.msj = ''
    }
  }
}
