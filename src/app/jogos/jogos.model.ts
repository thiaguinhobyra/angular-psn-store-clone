export interface Jogo {
    id: number;
    gameCover: string;
    gameLabel: string;
    gameType: string;
    gamePrice: string;
    gameDescription: string;
}

export type Jogos = Array<Jogo>;
