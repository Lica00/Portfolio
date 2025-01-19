import { Component, inject } from '@angular/core';
import { SingleProjectsComponent } from "./single-projects/single-projects.component";
import { progetto } from '../../models/customType';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  imports: [SingleProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  dataS : DataService = inject(DataService);
  progetti : progetto[] = this.dataS.projects;

}
