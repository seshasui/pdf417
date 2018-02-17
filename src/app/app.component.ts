import { Component } from '@angular/core';
import generateBarcode from 'pdf417/build';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public generateBarcode = generateBarcode;

   public imageSrc;
   public formData = {};
   public showBarcode: any = false;

   public generateBarcodeData = () => {
    this.imageSrc = generateBarcode(JSON.stringify(this.formData), 10, 3);
    this.showBarcode = true;
   }

  /* private generateBarCodeData = (formData) => {
      return this.generateBarcode(JSON.stringify(formData), 10, 3);
  } */



}
