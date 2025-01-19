import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { progetto } from '../../../models/customType';

@Component({
  selector: 'app-single-projects',
  imports: [ CommonModule],
  templateUrl: './single-projects.component.html',
  styleUrl: './single-projects.component.scss'
})
export class SingleProjectsComponent {

  @Input()
  progetto! : progetto;

}
