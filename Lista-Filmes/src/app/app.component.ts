// src/app/app.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmes = [
    { nome: 'Rambo: First Blood', categoria: 'Ação' },
    { nome: 'Duro de Matar', categoria: 'Ação' },
    { nome: 'Mad Max: Estrada da Fúria', categoria: 'Ação' },
    { nome: 'Matrix', categoria: 'Ação' },
    { nome: 'O Ultimato Bourne', categoria: 'Ação' },
    { nome: 'Se Beber, Não Case!', categoria: 'Comédia' },
    { nome: 'Superbad', categoria: 'Comédia' },
    { nome: 'Quero Ser Grande', categoria: 'Comédia' },
    { nome: 'Borat', categoria: 'Comédia' },
    { nome: 'As Branquelas', categoria: 'Comédia' },
    { nome: 'O Poderoso Chefão', categoria: 'Drama' },
    { nome: 'Clube da Luta', categoria: 'Drama' },
    { nome: 'À Espera de Um Milagre', categoria: 'Drama' },
    { nome: 'A Lista de Schindler', categoria: 'Drama' },
    { nome: 'O Curioso Caso de Benjamin Button', categoria: 'Drama' },  
    { nome: 'O Exorcista', categoria: 'Terror' },
    { nome: 'O Iluminado', categoria: 'Terror' },
    { nome: 'Invocação do Mal', categoria: 'Terror' },
    { nome: 'O Chamado', categoria: 'Terror' },
    { nome: 'Atividade Paranormal', categoria: 'Terror' },  
    { nome: 'Psicose', categoria: 'Suspense' },
    { nome: 'O Silêncio dos Inocentes', categoria: 'Suspense' },
    { nome: 'Seven: Os Sete Crimes Capitais', categoria: 'Suspense' },
    { nome: 'Janela Indiscreta', categoria: 'Suspense' },
    { nome: 'O Sexto Sentido', categoria: 'Suspense' },
  ];
  

  categoriaSelecionada = '';
  filmesFiltrados = this.filmes;

  filtrarFilmes() {
    this.filmesFiltrados = this.filmes.filter(filme =>
      this.categoriaSelecionada ? filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase() : true
    );
  }
}
