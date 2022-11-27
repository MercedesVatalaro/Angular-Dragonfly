import {DragonflyFragrancesComponent} from './dragonfly-fragrances/dragonfly-fragrances.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DragonflyContactComponent} from './dragonfly-contact/dragonfly-contact.component';



const routes: Routes= [
{
path:'',
redirectTo: 'fragrances',
pathMatch:'full'

},
{
path:'fragrances',
component: DragonflyFragrancesComponent
},
{
  path:'contact',
  component: DragonflyContactComponent
  },


];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule {}