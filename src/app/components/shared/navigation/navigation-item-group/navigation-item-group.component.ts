import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';

@Component({
  selector: 'app-navigation-item-group',
  standalone: true,
  imports: [
    CommonModule,

    NavigationItemComponent

  ],
  templateUrl: './navigation-item-group.component.html',
  styleUrl: './navigation-item-group.component.scss'
})
export class NavigationItemGroupComponent {

  @Input() routes: any = {}

  open: boolean = false;
  isGroup: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.isGroup = this.routes.children.length > 1
    this.open = !this.isGroup
  }

  toggleList() {
    this.open = !this.open
  }
}
