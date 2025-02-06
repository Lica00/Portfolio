import { Component, inject, WritableSignal } from '@angular/core';
import { SingleProjectsComponent } from './single-projects/single-projects.component';
import { progetto } from '../../models/customTypes';
import { IconsComponent } from "../icons/icons.component";
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  imports: [SingleProjectsComponent, IconsComponent, RouterLink],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  dataS : DataService = inject(DataService);
  progetti : WritableSignal<progetto[]> = this.dataS.progetti;
 
}
