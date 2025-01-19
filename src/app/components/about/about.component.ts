import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  dataS : DataService = inject(DataService);
  infoAbout : string[] = this.dataS.infoAbout;
  skills : string[] = this.dataS.skills;

}
