import { Component, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import SignaturePad from 'signature_pad';



@Component({
  selector: 'app-signature',
  standalone: true,
  templateUrl: './signature.page.html',
  styleUrls: ['./signature.page.scss'],
})
export class SignaturePage  implements AfterViewInit {

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Output() childEmitter = new EventEmitter<string>();
  linkSignature : any = ""
  private signaturePad!: SignaturePad;

  constructor() { 
    this.signaturePad = {} as SignaturePad;
  }

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.canvas.nativeElement);
  }

  clear() {
    this.signaturePad.clear();
  }
  
  save() {
    const dataUrl = this.signaturePad.toDataURL();
    this.linkSignature = document.createElement('a');
    this.linkSignature.href = dataUrl;
    console.log("link", this.linkSignature.href)
    this.childEmitter.emit(this.linkSignature.href)
    this.signaturePad.clear();
    // this.linkSignature.download = 'signature.png';
    // this.linkSignature.click();
  }





 

}
