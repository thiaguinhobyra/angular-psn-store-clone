import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogo } from '../jogos.model';
import { JogosService } from '../jogos.service';

@Component({
  selector: 'app-detalhe-jogo',
  templateUrl: './detalhe-jogo.component.html',
  styleUrls: ['./detalhe-jogo.component.css']
})
export class DetalheJogoComponent implements OnInit {

  jogoId!: number;

  jogo$!: any;

  constructor(
    private jogoService: JogosService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.jogoId = this.activatedRoute.snapshot.params['jogoId'];
    this.jogo$ = this.jogoService.getJogoById(this.jogoId);
  }

}
