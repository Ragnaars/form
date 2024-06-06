import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonIcon, 
  IonButtons, 
  IonMenuButton, 
  IonButton,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
  IonPopover,
  IonItemDivider,
  IonModal,
  IonBackButton,
  IonCard
} from '@ionic/angular/standalone';

import {IonicModule} from '@ionic/angular'

//icons import
import { addIcons } from 'ionicons';
import {
  camera, 
  qrCode,
  create,
} from 'ionicons/icons';

//pages (components) import
import { NavbarPage } from 'src/app/components/navbar/navbar.page';
import {SignaturePage} from "../../../components/signature/signature.page" 
import {QrScannerPage} from "../../../components/qr-scanner/qr-scanner.page"


//form import
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-form-retenidos',
  templateUrl: './form-retenidos.page.html',
  styleUrls: ['./form-retenidos.page.scss'],
  standalone: true,
  imports: [
    SignaturePage,
    NavbarPage,
    IonIcon, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonLabel,
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonButtons, 
    IonMenuButton, 
    IonButton,
    IonRow,
    IonCol,
    IonInput,
    IonItem,
    IonDatetime,
    IonPopover,
    IonItemDivider,
    IonModal,
    ReactiveFormsModule,
    QrScannerPage,
    IonBackButton,
    IonCard
  ],

})
export class FormRetenidosPage implements OnInit {
  @ViewChild('popover') popover!: IonPopover;
  @ViewChild('modal',{static:true}) modal! :IonModal;
  
  //TituloPage
  title : string = "Manifiesto Objetos Retenidos"
  
  //firma
  firma!:string;

  firmaVacia = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==";


  //formualrio
  formulario!:FormGroup;

  //constructor
  constructor(private fb: FormBuilder) {
    this.startAllIcons();
    this.formulario = this.fb.group({
      compania : ["",Validators.required],
      fechaVuelo : ["",Validators.required],
      horaVuelo : ["",Validators.required],
      vuelo : ["",Validators.required],
      destino : ["",Validators.required],
      puenteEmb : ["",Validators.required],
      objeto : ["",Validators.required],
      marca : ["",Validators.required],
      cantidad : ["",Validators.required],
      modelo : ["",Validators.required],
      serie : ["",Validators.required],
      asiento : ["",[Validators.required]],
      particular : ["",Validators.required],
      pax : ["",Validators.required],
      ticket : ["",Validators.required],
      funcionario : ["",Validators.required],
      numTel : ["",Validators.required],
      firma :["",Validators.required],
      fechaReg : [""],
      estadoReg : [""]
    })
  }
  
  //OnInit
  ngOnInit() {
  }



  //metodos utiles
  
  recibirFirma(firma:string){
    if(firma != this.firmaVacia){
      this.firma = firma
      this.formulario.controls['firma'].setValue(this.firma)
      this.formulario.controls['fechaReg'].setValue(new Date().toISOString())
      this.formulario.controls['estadoReg'].setValue("Ingresado")
      console.log("recibiendo firma del componente hijo", this.firma)
      this.modal.dismiss();
    }else{
      console.log("Firme adecuadamente")
    }
  }

  startAllIcons(){
    addIcons({
      camera,
      qrCode,
      create
    });
  }

  //submitFormulario 
  onSubmit(){
    if(this.formulario.valid){
      console.log("Formulario Valido", this.formulario.value)
    }else{
      console.log("Formulario Invalido")
    }
  }

}
