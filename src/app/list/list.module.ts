import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListTemplateComponent } from './list-template/list-template.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    ListTemplateComponent,
    CardComponent,
  ],
  imports: [CommonModule, ListRoutingModule],
})
export class ListModule {}
