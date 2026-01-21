import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-layout',
  imports: [
    SideBarComponent,
    MainComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
