import { Component,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-componente-mensaje-usuario',
  templateUrl: './componente-mensaje-usuario.component.html',
  styleUrls: ['./componente-mensaje-usuario.component.css']
})
export class ComponenteMensajeUsuarioComponent {
  
  textoChatPepe:string
  textoChatMaria:string  
  @Output() eventoTexto1 = new EventEmitter<string>();
  @Output() eventoTexto2 = new EventEmitter<string>();
  
  guardarMensajePepe(){
    this.eventoTexto1.emit(this.textoChatPepe)
    this.textoChatPepe = ""
  }
  guardarMensajeMaria(){
    this.eventoTexto2.emit(this.textoChatMaria)
    this.textoChatMaria = ""
  }


  constructor(){
    this.textoChatPepe = ""
    this.textoChatMaria = ""
  }


}
