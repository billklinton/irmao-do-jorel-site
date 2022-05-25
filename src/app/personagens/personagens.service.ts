import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem, Personagens } from './personagem';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(private httpClient: HttpClient) { }

  public async getPersonagens(): Promise<Personagens>{
    return await this.httpClient.get<Personagens>(`${BASE_URL}/personagem`).toPromise();
  }

  public async getPersonagemPorId(id: number): Promise<Personagem>{
    return await this.httpClient.get<Personagem>(`${BASE_URL}/personagem/${id}`).toPromise();
  }

  public async getPersonagemPorNome(nome: string): Promise<Personagens>{
    return await this.httpClient.get<Personagens>(`${BASE_URL}/personagem/busca/${nome}`).toPromise();
  }
}
