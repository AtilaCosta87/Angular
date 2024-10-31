import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {
  
  // Variável de média
  media:number = 8;

  //Vetor
  nomes:string[] = ['Átila', 'Lilian', 'Clara', 'Caroline'];

  //Linguagem
  linguagem:string = 'JS';

}
