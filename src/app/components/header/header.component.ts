import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-header',
  imports: [ CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  dataS : DataService = inject(DataService);
  nome : string = this.dataS.nome;
  voci : string[] = this.dataS.vociHeader;

  showNavMobile : WritableSignal<boolean>= signal(false);

  // Inverte valore attuale signal
  toggle(){ this.showNavMobile.update( ( value ) => { return !value } ) }


  // Scroll page a sezione premuta
  scrollTo( id : string ) : void {

    // Riferimento elemento a cui scrollare
    const element = document.getElementById(`${id.toLowerCase()}`);

    // Se riferimento valido scrolla 
    if( element != null ){ 
      element.scrollIntoView(  { behavior : "smooth", block: "start"} )
    };
  }
}
