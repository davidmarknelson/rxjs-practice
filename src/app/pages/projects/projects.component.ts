import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from '../../utilities/interfaces/project-info';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectInfo[] = [
    { title: 'Click Race', path: 'click-race' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
