import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { progetto } from '../../../models/customTypes';

@Component({
  selector: 'app-single-projects',
  imports: [CommonModule],
  templateUrl: './single-projects.component.html'
})
export class SingleProjectsComponent {

  progetto : InputSignal<progetto | undefined> = input<progetto>();

}
