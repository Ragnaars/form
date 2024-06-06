import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard
 } from '@ionic/angular/standalone';
 import {
  camera, 
  qrCode,
  create,
} from 'ionicons/icons';

import { addIcons } from 'ionicons';

import { NavbarPage } from 'src/app/components/navbar/navbar.page';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';

//Servicios
import { ObjRetenidosService } from 'src/app/services/obj-retenidos.service';

//Componentes
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';

@Component({
  selector: 'app-bandeja-entrada-retenidos',
  templateUrl: './bandeja-entrada-retenidos.page.html',
  styleUrls: ['./bandeja-entrada-retenidos.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    NavbarPage,
    ReactiveFormsModule,
    IonButton,
    IonIcon,
    RouterLink,
    NgxDatatableModule,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    DataTableComponent
  ]
})

export class BandejaEntradaRetenidosPage implements OnInit {

  title : string = "Bandeja de entrada de objetos retenidos";



  //formulario
  formulario! : FormGroup;




  constructor(
    private fb : FormBuilder, 
    private router : Router,
    private service : ObjRetenidosService
  ) 
  { 
      this.formulario = this.fb.group({
        fechaVuelo : ["",Validators.required],
        horaVuelo : ["",Validators.required],
        destino : ["",Validators.required],
        compania: ["",Validators.required],
        vuelo : ["",Validators.required],
        puenteEmb : ["",Validators.required]
    })
  }


  ngOnInit() {
    this.startAllIcons();

  }

  onSubmit(){
    if(this.formulario.valid){
      console.log("Formulario Valido", this.formulario.value)
    }else{
      console.log("Formulario Invalido")
    }
  }

  startAllIcons(){
    addIcons({
      camera,
      create,
      qrCode
    })
  }




}
