import { Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {NgxScannerQrcodeComponent, NgxScannerQrcodeModule, NgxScannerQrcodeService} from 'ngx-scanner-qrcode';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    NgxScannerQrcodeModule]
})
export class QrScannerPage implements OnInit {
  // @ViewChild('scanner',{static: true}) scanner!: NgxScannerQrcodeComponent;
  // selectedDeviceId!: string;
  constructor() { }

  ngOnInit() {
    // this.scanner.devices.pipe(first()).subscribe((devices) => {
    //   const backCamera = devices.find(device => /back|rear|environment/gi.test(device.label));
    //   if (backCamera) {
    //     this.selectedDeviceId = backCamera.deviceId;
    //   }else if (devices.length) {
    //     this.selectedDeviceId = devices[0].deviceId;
    //   }
    // })
  }

}
