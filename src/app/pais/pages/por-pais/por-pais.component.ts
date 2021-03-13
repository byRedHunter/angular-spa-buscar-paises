import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = 'Peru';
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(): void {
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
