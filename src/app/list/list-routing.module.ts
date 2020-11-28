import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTemplateComponent } from './list-template/list-template.component';

const routes: Routes = [
  {path: '', component: ListTemplateComponent },
  {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }