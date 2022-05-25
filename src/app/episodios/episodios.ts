export interface Episodio {
  id: number;
  nome: string;
  descricao: string;
  sinopse: string;
  temporadaId: number;
  dataEstreia: string;
  links: Array<Link>;
}

export interface Link {
  id: number;
  fonte: string;
  url: string;
}

export type Episodios = Array<Episodio>;
