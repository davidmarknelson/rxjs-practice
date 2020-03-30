import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from '../utilities/interfaces/project-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: ProjectInfo[] = [
    { title: 'Click Race', path: 'click-race' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
