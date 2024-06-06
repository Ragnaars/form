import { Component, OnInit,Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonButton,IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButton, IonButtons, IonMenuButton,CommonModule, FormsModule]
})
export class NavbarPage implements OnInit {
  @Input() title! : string;

  constructor() { }

  ngOnInit() {
  }

}
