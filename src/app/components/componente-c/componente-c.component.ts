import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './componente-c.component.html',
  styleUrls: ['./componente-c.component.css']
})
export class ComponenteCComponent implements OnInit {

  constructor (private myservice:GamesService){}

  ngOnInit(){
    
  }

}
