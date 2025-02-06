import { Injectable, signal, WritableSignal } from '@angular/core';
import { navItem, progetto } from '../models/customTypes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataDev : WritableSignal<string[]> = signal( ["Ismaele Carratta", "Front-end developer"] );
  itemsNav : WritableSignal<navItem[]> = signal( 
    [ 
      { path : "/projects", text: "Progetti", esterno: false },
      { path : "https://github.com/Lica00", text: "Github", esterno: true },
      { path : "https://www.linkedin.com/in/ismaelecarratta/", text: "Linkedin", esterno: true }
     ] 
  );

  progetti : WritableSignal< progetto[]> = signal( 
    [
      { 
        name : "LabShop v2", image : `assets/images/p1_600`, smallImage : "assets/images/p1_400",
        links : [ "https://github.com/Lica00/LabShop_v2.git", "https://labshop-v2.onrender.com/"],
      },
      { 
        name : "LabShop v1", image : "assets/images/p2_600", smallImage : "assets/images/p2_400",
        links : ["https://github.com/Lica00/LabShop_v1", "https://lica00.github.io/LabShop_v1/"],
      },
      { 
        name : "Snake", image : "assets/images/p3_600", smallImage : "assets/images/p3_400",
        links : ["https://github.com/Lica00/Snake", "https://lica00.github.io/Snake/"],
      },
      { 
        name : "Tic Tac Toe", image : "assets/images/p4_600", smallImage : "assets/images/p4_400",
        links : ["https://github.com/Lica00/Tic_Tac_Toe", "https://lica00.github.io/Tic_Tac_Toe/"],
      },
      { 
        name : "Morra Cinese", image : "assets/images/p5_600", smallImage : "assets/images/p5_400",
        links : ["https://github.com/Lica00/morra_cinese","https://lica00.github.io/morra_cinese/"],
      }
    ]
  );

}
