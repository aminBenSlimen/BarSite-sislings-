import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input('placeholder') placeholder:any;
  @Input('class') class:any;
  @Input('type') type:any = 'text';
  @Output('onChange') onChange:any = new EventEmitter()


  doSome(){
    this.onChange.emit('hello')
  }
}
