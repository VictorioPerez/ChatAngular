import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-sala',
  templateUrl: './componente-sala.component.html',
  styleUrls: ['./componente-sala.component.css']
})
export class ComponenteSalaComponent {
mensajeChat1:string[] = [] 
mensajeChat2:string[] = [] 

mostrarMensaje1(texto:string){
this.mensajeChat1.push(texto);
}

mostrarMensaje2(texto:string){
  this.mensajeChat2.push(texto);
}
  



}
