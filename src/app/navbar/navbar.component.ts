import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems = [
    { name: "about", link: "about", },
    { name: "info", link: "info", },
    { name: "prices", link: "prices", },
    { name: "gallery", link: "gallery", },
    { name: "contact", link: "contact", }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
