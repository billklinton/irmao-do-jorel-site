import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Input() placeholder!: string;
  form!: FormGroup;
  @Output() textoBuscaEvent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      textoBusca: [''],
    });
  }

  buscar() {
    this.textoBuscaEvent.emit(this.form.get('textoBusca')?.value ?? '');
  }
}
