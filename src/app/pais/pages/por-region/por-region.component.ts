import { Component, OnInit } from '@angular/core';

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
  regiones: string[] = ['africa', 'americas', 'oceania', 'europa', 'asia'];
  regionActiva: string = '';

  constructor() {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    this.regionActiva = region;
  }
}
