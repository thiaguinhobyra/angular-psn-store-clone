import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Jogo } from './jogos.model';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private jogos: Jogo[] = [
    {
      id: 1,
      gameCover: "assets/bt-1.jpg",
      gameLabel: "DIGITAL",
      gameType: "DIGITAL | PS5",
      gamePrice: "R$ 129,99",
      gameDescription: "Battlefild 1",
    }, 
    {
      id: 2,
      gameCover: "assets/bt-4.jpg",
      gameLabel: "EXCLUSIVE",
      gameType: "DISCO | PS5",
      gamePrice: "R$ 229,99",
      gameDescription: "Battlefild 4",
    }, 
    {
      id: 3,
      gameCover: "assets/bt-hardline.jpg",
      gameLabel: "NEW",
      gameType: "DIGITAL | PS4",
      gamePrice: "R$ 289,99",
      gameDescription: "Battlefild hardline",
    }, 
    {
      id: 4,
      gameCover: "assets/bt-5.jpg",
      gameLabel: "NEW",
      gameType: "DIGITAL | PS4",
      gamePrice: "R$ 389,99",
      gameDescription: "Battlefild V",
    }, 
  ];

  constructor(
    private http: HttpClient,
    private  tokenService: TokenService
    ) { }

    listaDoUsuario(nomeDoUsuario: string):Observable<Jogo> {
      const token = this.tokenService.retornaToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      return this.http.get<Jogo>(`${API}/${nomeDoUsuario}/photos`, {
        headers,
      });
    }

    getJogoById(id: number): Jogo | null {      
      return this.jogos.find(jogo => jogo.id == id) ?? null;
    }
  
    getAllJogos(): Jogo[] {
      return this.jogos;
    }
    
}
