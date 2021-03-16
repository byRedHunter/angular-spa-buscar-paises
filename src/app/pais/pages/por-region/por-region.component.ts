import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin: 0 10px 10px 0;
      }
    `,
  ],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'oceania', 'europe', 'asia'];
  regionActiva: string = '';
  paises: Country[] = [];
  loading: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (region === this.regionActiva) return;

    this.loading = true;
    this.regionActiva = region;
    this.paises = [];

    this.paisService
      .buscarPaisesPorRegion(this.regionActiva)
      .subscribe((paises) => {
        this.paises = paises;
        this.loading = false;
      });
  }
}
