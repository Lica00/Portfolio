import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
})
export class IntroComponent {

  dataS : DataService = inject(DataService);
  dataDev : WritableSignal<string[]> = this.dataS.dataDev;
  router : Router = inject(Router);

  // 1° opacity-100 - 2° hidden --> ritardo tra le due per applicare la transition 
  showName : WritableSignal<boolean[]> = signal([false, true]);
  showDev : WritableSignal<boolean[]> = signal([false, true]);


  ngOnInit(){

    setTimeout( () => { this.showName.update( ( v ) => { v[1] = false; return v } )}, 50 )   // Rimuove classe hidden
    setTimeout( () => { this.showName.update( ( v ) => { v[0] = true;  return v } )}, 60 )   // Applica classe opacity-100
    setTimeout( () => { this.showName.update( ( v ) => { v[0] = false; return v } )}, 2000 ) // Rimuove classe opacity-100
    setTimeout( () => { this.showName.update( ( v ) => { v[1] = true;  return v } )}, 3000 ) // Applica classe hidden

    setTimeout( () => { this.showDev.update( ( v ) => { v[1] = false; return v } )}, 3000 ) // Rimuove classe hidden
    setTimeout( () => { this.showDev.update( ( v ) => { v[0] = true;  return v } )}, 3100 ) // Applica classe opacity-100
    setTimeout( () => { this.showDev.update( ( v ) => { v[0] = false; return v } )}, 4100 ) // Rimuove classe opacity-100
    setTimeout( () => { this.showDev.update( ( v ) => { v[1] = true;  return v } )}, 5100 ) // Applica classe hidden

    setTimeout( () => { this.router.navigateByUrl("home"); }, 5200 ) // Naviga a rotta home
    
  }


}
