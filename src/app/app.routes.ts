import { Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IntroComponent } from './components/intro/intro.component';

export const routes: Routes = [
    { path: "", component: IntroComponent},
    { path: "home", component: NavComponent },
    { path: "projects", component: ProjectsComponent}
];
