import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() logo = "Launcher!";

  ngOnInit() {
  }

}
