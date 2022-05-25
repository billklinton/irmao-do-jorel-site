export interface Personagem {
  id: number;
  nome: string;
  imagemUrl: string;
  categoria: string;
  idade: string;
  descricao: string;
  frase: string;
  biografia: string;
  aparencia: string;
  personalidade: string;
  vozes: Array<Voz>;
}

export interface Voz {
  id: string;
  nome: string;
  personagemId: number;
}

export type Personagens = Array<Personagem>;
