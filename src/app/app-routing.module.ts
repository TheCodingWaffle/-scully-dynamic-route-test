import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StuffComponent } from './stuff/stuff.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stuff', component: StuffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
