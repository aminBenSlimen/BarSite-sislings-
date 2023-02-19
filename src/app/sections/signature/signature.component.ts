import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent {
  coktails: any = [];
  responsiveOptions;
  selectedCoktail :any= null;
  constructor(private http: HttpService) {}

  ngOnInit() {
    
    this.coktails = this.http.globalData.cocktails;
    this.selectedCoktail = this.coktails[0]
  }

  changeCoktail(event){
    this.selectedCoktail = this.coktails[event.page]

  }
}
