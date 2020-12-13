import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { ReadOneComponent } from './application/crud/read-one/read-one.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { Error404Component } from './application/error404/error404.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tutoriel', 
    children:[
    {path: ':id', component: TutorielsComponent},
  ]},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'crud', component: ReadComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'readOne/:id', component: ReadOneComponent},
  {path: 'contact', component: ContactComponent},

  {path:'', redirectTo:'/home', pathMatch: 'full'},
  { path: 'fun', loadChildren: () => import('./application/youtube/youtube.module').then(m => m.YoutubeModule) },
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
