import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, NgxDatatableModule, DatatableComponent } from '@swimlane/ngx-datatable';
import {IonGrid,IonRow,IonCol,IonCard, IonButton, IonIcon, IonInput, IonSearchbar } from '@ionic/angular/standalone';
import { ObjRetenidosService } from 'src/app/services/obj-retenidos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  imports: [IonSearchbar, IonInput, 
    IonIcon, 
    IonButton, 
    NgxDatatableModule,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    NgIf
  ],
  standalone: true,
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent  implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;

//table
  ColumnMode = ColumnMode;
  loadingIndicator!:boolean;
  rows: any[] = [];
  temp: any[] = [];
  vari! : any;
  
  columns = [
    { prop: 'compania' }, 
    { prop: 'fechaVuelo' }, 
    { name: 'horaVuelo' }, 
    {prop: 'vuelo'},
    {name: 'destino'},
    {name: 'puenteEmb'},
    {name: 'objeto'},
    {name: 'marca'},
    {name: 'cantidad'},
    {name: 'modelo'},
    {name: 'serie'},
    {name: 'asiento'},
    {name: 'particular'},
    {name: 'pax'},
    {name: 'ticket'},
    {name: 'funcionario'},
    {name: 'numTel'},
    {name: 'firma'},
    {prop : 'fechaReg'},
    {prop : 'estado'}

  ];

  constructor(private service : ObjRetenidosService) { }

  ngOnInit() {
    this.getDataForTable();
  }
  
 getDataForTable() {
    this.service.getData().subscribe({
      next: data => {
        this.loadingIndicator = true;
        this.rows = [...data.rows];
        this.temp = [...data.rows]; // Guardar una copia de los datos originales
        console.log(this.rows);
        this.loadingIndicator = false;
      },
      error: err => {
        console.log(err);
      }
    });
  }
   updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    // Si el valor de búsqueda está vacío, restablece los datos originales
    if (!val) {
      this.rows = [...this.temp];
    } else {
      // Filtra los datos
      const temp = this.temp.filter((d: any) => {
        return d.compania.toLowerCase().indexOf(val) !== -1 ||
          d.fechaVuelo.toLowerCase().indexOf(val) !== -1 ||
          d.vuelo.toLowerCase().indexOf(val) !== -1 ||
          d.destino.toLowerCase().indexOf(val) !== -1 ||
          d.objeto.toLowerCase().indexOf(val) !== -1 ||
          d.pax.toLowerCase().indexOf(val) !== -1 ||
          d.ticket.toLowerCase().indexOf(val) !== -1;
      });

      // Actualiza las filas
      this.rows = temp;
    }
    
    // Siempre vuelve a la primera página
    this.table.offset = 0;
  }


}
