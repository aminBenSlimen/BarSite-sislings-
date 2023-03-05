import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-all-signatures',
  templateUrl: './all-signatures.component.html',
  styleUrls: ['./all-signatures.component.scss']
})
export class AllSignaturesComponent {
  allSignature:any = []
  constructor(private http: HttpService) {
    http.fetchAll('allSignature', 'menus/fetch-signature-cocktails').then(() => {
      this.allSignature = http.allData.allSignature;
    });
  }
}
