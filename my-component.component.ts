import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  isAuth=false;
  notes = [
    {
      date:'20/02/2018',
      heure:'14:30',
      tache:'Apprendre angular'
    },
    {
      date:'14/05/1994',
      heure:'01:30',
      tache:'Apprendre firebase'
    },
    {
      date:'08/11/2007',
      heure:'17:42',
      tache:'Apprendre html'
    }
  ];
   
  
  constructor() { 
    
    setTimeout(
      () => {
        this.isAuth = true;
      },5000
    );
}

  ngOnInit() {
    
  }
  
} 
