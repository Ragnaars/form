import { Component, OnInit, ViewChild } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonMenu, IonSplitPane, IonButton, IonToolbar, IonTitle, IonContent, IonList, IonIcon, IonLabel, IonItem, IonButtons, IonMenuToggle, IonAvatar, IonText, IonSelect, IonSelectOption, IonSearchbar, IonImg, IonModal, ModalController, MenuController } from '@ionic/angular/standalone';
import { initFlowbite } from 'flowbite'
import { addIcons } from 'ionicons';
import { idCardOutline, idCardSharp, idCard, alertCircleOutline, alertCircleSharp, alertCircle, briefcaseSharp, briefcaseOutline, briefcase, logOut, logOutOutline, logOutSharp, car, paw, swapHorizontal, star, accessibility, home, list, homeSharp, homeOutline, documents, documentsOutline, documentsSharp, } from 'ionicons/icons';
import { NgClass } from '@angular/common';

import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonModal,
    IonImg,
    IonSearchbar,
    NgClass,
    IonText,
    IonAvatar,
    IonApp,
    IonRouterOutlet,
    IonHeader, IonMenu,
    IonSplitPane,
    IonButton,
    IonToolbar,
    IonTitle,
    IonApp,
    IonContent,
    IonList,
    IonIcon,
    IonLabel,
    IonItem,
    IonButtons,
    IonMenuToggle,
    IonSelect,
    IonSelectOption,
    HttpClientModule
  ],

})
export class AppComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: IonModal;

  public profile = {
    email: "admin@dgac.gob.cl",
    name: "Admin",
    avatar: "assets/icon/USER.png"
  }

  pages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home',
      active: true
    },
    {
      title: "Formularios",
      url: '',
      icon: 'documents',
      active: false
    },
    {
      title: 'Cerrar Sesión',
      url: '',
      icon: 'log-out',
      active: false
    }
    //  {
    //   title:'FormRetenidos'
    //   url: '/form-retenidos',
    //   icon: 'list'
    //  }
  ]

  forms = [
    {
      nombre: 'Manifiesto Objetos Retenidos',
      url: '/bandeja-entrada-retenidos',
      icon: 'swap-horizontal'

    },
    {
      nombre: "Registro Aleatorio Equipaje de Mano",
      url: '/form-reg-aleatorio-equipaje',
      icon: 'briefcase'
    },
    {
      nombre: "Entrega de Mercancías Peligrosas",
      url: '/form-entrega-mercancias',
      icon: 'alert-circle'
    },
    {
      nombre: 'Control Aleatorio de TICAS',
      url: '/form-control-ticas',
      icon: 'id-card'
    },
    {
      nombre: 'Asignación de Posiciones',
      url: '/form-asignacion-posiciones',
      icon: 'accessibility'
    },
    {
      nombre: 'SGK9',
      url: '/form-sgk9',
      icon: 'paw'
    },
    {
      nombre: 'Registro Vehicular',
      url: '/form-reg-vehicular',
      icon: 'car'
    }
  ]

  results = [...this.forms];


  constructor(private router: Router, private modalCtrl: ModalController, private menuCtrl: MenuController) {
    this.addAllIcons();
  }



  ngOnInit() {
    initFlowbite();
  }

  onItemTap(page: any, event: Event) {
    if (!page?.active) {
      const index = this.pages.findIndex(p => p.active);
      this.pages[index].active = false;
      page.active = true;
      if (page.title === "Formularios") {
        this.preventMenuClose(event);
        return;
      }
    }

    if (page?.url) {

      //navigate
      console.log("Navigate to", page.url)
      this.router.navigate([page.url])

    } else {
      console.log("No route")
      //logout
    }

  }

  preventMenuClose(event: Event) {

    event.stopPropagation();
  }

  async goToForm(url: any) {

    await this.modalCtrl.dismiss();
    await this.menuCtrl.close();
    this.router.navigate([url]);
  }

  handleInput(event: any) {
    console.log(event);
    const query = event.target.value.toLowerCase();
    this.results = this.forms.filter((d) => d.nombre.toLowerCase().indexOf(query) > -1);
  }

  addAllIcons() {
    addIcons({
      star,
      accessibility,
      home,
      list,
      homeSharp,
      homeOutline,
      documents,
      documentsOutline,
      documentsSharp,
      swapHorizontal,
      paw,
      car,
      logOut,
      logOutOutline,
      logOutSharp,
      briefcase,
      briefcaseOutline,
      briefcaseSharp,
      alertCircle,
      alertCircleOutline,
      alertCircleSharp,
      idCard,
      idCardOutline,
      idCardSharp,
    });
  }
}
