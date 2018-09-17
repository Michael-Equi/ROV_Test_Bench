import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './components/Example Pages/first-page/first-page.component';
import { SecondPageComponent} from './components/Example Pages/second-page/second-page.component';
import { ThirdPageComponent} from './components/Example Pages/third-page/third-page.component';
import { CopilotComponent} from './components/copilot/copilot.component';

const routes: Routes = [
  { path: '', component: CopilotComponent},
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'copilot-page', component: CopilotComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
