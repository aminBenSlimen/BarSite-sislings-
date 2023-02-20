import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input('placeholder') placeholder: any;
  @Input('withIcon') withIcon: any = false;
  @Input('class') class: any;
  @Input('type') type: any = 'text';

  @Input('value') value;
  @Output('valueChange') valueChange: any = new EventEmitter();

  change() {
    this.valueChange.emit(this.value);
  }
}
