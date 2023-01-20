import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections-headers',
  templateUrl: './sections-headers.component.html',
  styleUrls: ['./sections-headers.component.scss']
})
export class SectionsHeadersComponent {
  @Input('title') title: any;
  @Input('description') description: any;
}
