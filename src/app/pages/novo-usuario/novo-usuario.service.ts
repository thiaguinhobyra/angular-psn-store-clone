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
    return this.http.post('http://localhost:3000/user/sifnup', novoUsuario)
  }

  verifiqueUsuarioExistente(nomeUsuario: string){
    return this.http.get(`http://localhost:3000/user/existss/${nomeUsuario}`)
  }
}
