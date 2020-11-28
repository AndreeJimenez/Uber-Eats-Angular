import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.scss']
})

export class ListTemplateComponent implements OnInit {
  title = 'Popular cerca de ti';

  constructor() { }

  ngOnInit(): void {}
}
