import { Component } from '@angular/core';
import { BioComponent } from "./bio/bio.component";
import { CvComponent } from "./cv/cv.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactsComponent } from "./contacts/contacts.component";

@Component({
  selector: 'app-main',
  imports: [BioComponent, CvComponent, SkillsComponent, ContactsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
