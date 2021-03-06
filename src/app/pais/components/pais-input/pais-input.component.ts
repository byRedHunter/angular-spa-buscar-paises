import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeHolder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() {}

  get textPlaceHolder(): string {
    return this.placeHolder;
  }

  // se dispara una sola vez, cuando el compnente es inicializado
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar(): void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
