import { Component, Input, OnInit } from '@angular/core';
import { Jogo } from '../jogos.model';
import { JogosService } from '../jogos.service';


@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  @Input()
  id="";
  gameCover: string = "";
  gameLabel: string= "";
  gameType: string= "";
  gamePrice: string= "";

  constructor(
    private jogoService: JogosService
  ) { }

  ngOnInit(): void {
    
    const jogo: Jogo | undefined = this.jogoService.getJogoById(this.id);
    
    if (jogo) {
      this.gameCover = jogo.gameCover;
      this.gameLabel = jogo.gameLabel;
      this.gameType = jogo.gameType;
      this.gamePrice = jogo.gamePrice;
    } else {
      // Trate o caso em que o ID não foi encontrado
      console.error(`Jogo com ID ${this.id} não encontrado.`);
    }
    console.log(this.gameCover);
    
  }

}
