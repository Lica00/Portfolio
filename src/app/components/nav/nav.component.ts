import { Component, inject, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconsComponent } from "../icons/icons.component";
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { navItem } from '../../models/customTypes';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, IconsComponent, CommonModule],
  templateUrl: './nav.component.html',

})
export class NavComponent {

  dataS : DataService = inject(DataService);
  dataDev : WritableSignal<string[]> = this.dataS.dataDev;
  items : WritableSignal<navItem[]> = this.dataS.itemsNav;
  
}
