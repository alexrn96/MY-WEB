import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title:'home',
        loadComponent: () => import('./home/home.component'),
        children:[
            {
                path:'aboutme',
                title:'About Me',
                loadComponent: () => import('./home/pages/about-me/about-me.component'),
            },
            {
                path:'contactme',
                title:'Contact me',
                loadComponent: () => import('./home/pages/contact-me/contact-me.component'),
            },
            {
                path:'projects',
                title:'Projects',
                loadComponent: () => import('./home/pages/projects/projects.component'),
            },
            {
                path:'skills',
                title:'Skills',
                loadComponent: () => import('./home/pages/skills/skills.component'),
            },
            {
                path:'',
                redirectTo:'aboutme',
                pathMatch:'full',
            }

        ]
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    }
];
