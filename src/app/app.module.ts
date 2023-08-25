import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuBarModule } from './components/menu-bar/menu-bar.module';
import { NovoUsuarioModule } from './pages/novo-usuario/novo-usuario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuBarModule,
    NovoUsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
