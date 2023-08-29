import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  cadastaNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post('http://localhost:3000/user/signup', novoUsuario)
  }

  verifiqueUsuarioExistente(nomeUsuario: string){
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }

  verifiqueEmailExistente(emailUsuario: string){
    return this.http.get(`http://localhost:3000/user/exists/email/${emailUsuario}`)
  }
}
