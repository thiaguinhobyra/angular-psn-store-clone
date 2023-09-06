export interface Jogo {
    id: string;
    gameCover: string;
    gameLabel: string;
    gameType: string;
    gamePrice: string;
}

export type Jogos = Array<Jogo>;
