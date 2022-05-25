import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Episodio, Episodios } from './episodios';

const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  constructor(private httpClient: HttpClient) { }

  public async getEpisodios(): Promise<Episodios>{
    return await this.httpClient.get<Episodios>(`${BASE_URL}/episodio`).toPromise();
  }

  public async getEpisodioPorId(id: number): Promise<Episodio>{
    return await this.httpClient.get<Episodio>(`${BASE_URL}/episodio/${id}`).toPromise();
  }

  public async getEpisodiosPorNome(nome: string): Promise<Episodios>{
    return await this.httpClient.get<Episodios>(`${BASE_URL}/episodio/busca/${nome}`).toPromise();
  }

  public async getEpisodiosPorTemporada(temporada: number): Promise<Episodios>{
    return await this.httpClient.get<Episodios>(`${BASE_URL}/episodio/temporada/${temporada}`).toPromise();
  }
}
