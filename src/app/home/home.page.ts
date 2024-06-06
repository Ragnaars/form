import { Component, Input,Output } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons, IonButton, MenuController} from '@ionic/angular/standalone';
import { NavbarPage } from '../components/navbar/navbar.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, 
    IonButtons, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonMenuButton,
    NavbarPage,
    

  ],
})
export class HomePage {

  title : string = "Inicio";

  constructor(private menuCtrl : MenuController) {

   }

   abrirMenu(){
    this.menuCtrl.open();
   }
}
