import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = [
    { path: '/phrases', title: 'Frases' },
    { path: '/messages', title: 'Mensajes' },
    { path: '/gallery', title: 'Galería' },
    { path: '/chat', title: 'Chat' }    
  ];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}
