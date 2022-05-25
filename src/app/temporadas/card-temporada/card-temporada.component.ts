import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-temporada',
  templateUrl: './card-temporada.component.html',
  styleUrls: ['./card-temporada.component.css']
})
export class CardTemporadaComponent {
  @Input() temporada!: number;

  constructor(private router: Router) { }

  public verEpisodios(){
    this.router.navigate(['/episodios', this.temporada])
  }

}
