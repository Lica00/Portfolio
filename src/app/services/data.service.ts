import { Injectable } from '@angular/core';
import { progetto } from '../models/customType';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nome : string = "Carratta Ismaele";
  vociHeader : string[] = ["Progetti", "About", "Home"];
  
  infoAbout : string[] = [
    `Sono uno sviluppatore <span>front-end</span>, mi appasiona creare soluzioni web pratiche e creative principalmente con <span>JavaScript</span> e 
    <span>Angular</span>, allo stesso tempo amo mettermi alla prova con nuove tecnologie e progetti, imparando sempre qualcosa di nuovo.`,
    "Quando non sono al computer, trascorro il mio tempo libero a leggere, allenarmi e guardare serie TV." ,
    "Sono aperto a ogni opportunità di lavoro che mi permetta di <span>contribuire</span>, <span>imparare</span>, e <span>crescere</span>.",
  ];
  
  skills : string[] = [ "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "ANGULAR", "SASS", "GIT" ];

  projects : progetto[] = [
    { name : "LabShop v2",
      git : "https://github.com/Lica00/LabShop_v2.git",
      live : "https://labshop-v2.onrender.com/",
      image : `assets/images/p1_400`,
      smallImage : "assets/images/p1_200"
    },
    { 
      name : "LabShop v1",
      git : "https://github.com/Lica00/LabShop_v1",
      live : "https://lica00.github.io/LabShop_v1/",
      image : "assets/images/p2_400",
      smallImage : "assets/images/p2_200"
    },
    { 
      name : "Snake",
      git : "https://github.com/Lica00/Snake",
      live : "https://lica00.github.io/Snake/",
      image : "assets/images/p3_400",
      smallImage : "assets/images/p3_200"
    },
    { 
      name : "Tic Tac Toe",
      git : "https://github.com/Lica00/Tic_Tac_Toe",
      live : "https://lica00.github.io/Tic_Tac_Toe/",
      image : "assets/images/p4_400",
      smallImage : "assets/images/p4_200"
    },
    { 
      name : "Morra Cinese",
      git : "https://github.com/Lica00/morra_cinese",
      live : "https://lica00.github.io/morra_cinese/",
      image : "assets/images/p5_400",
      smallImage : "assets/images/p5_200"
    }
  ]

}
