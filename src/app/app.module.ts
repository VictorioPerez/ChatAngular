import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteMensajeUsuarioComponent } from './componente-mensaje-usuario/componente-mensaje-usuario.component';
import { ComponenteSalaComponent } from './componente-sala/componente-sala.component';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteMensajeUsuarioComponent,
    ComponenteSalaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
