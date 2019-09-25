import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'planes',
    loadChildren: () => import('./pages/planes/planes.module').then(m => m.PlanesPageModule)
  },
  { path: 'image1', loadChildren: './pages/expanded/image1/image1.module#Image1PageModule' },
  { path: 'image2', loadChildren: './pages/expanded/image2/image2.module#Image2PageModule' },
  { path: 'image3', loadChildren: './pages/expanded/image3/image3.module#Image3PageModule' },
  { path: 'image4', loadChildren: './pages/expanded/image4/image4.module#Image4PageModule' },
  { path: 'imagep1', loadChildren: './pages/expanded/imagep1/imagep1.module#Imagep1PageModule' },
  { path: 'image5', loadChildren: './pages/expanded/image5/image5.module#Image5PageModule' },
  { path: 'image6', loadChildren: './pages/expanded/image6/image6.module#Image6PageModule' },
  { path: 'image7', loadChildren: './pages/expanded/image7/image7.module#Image7PageModule' },
  { path: 'image8', loadChildren: './pages/expanded/image8/image8.module#Image8PageModule' },
  { path: 'imagep2', loadChildren: './pages/expanded/imagep2/imagep2.module#Imagep2PageModule' },
  { path: 'imagep3', loadChildren: './pages/expanded/imagep3/imagep3.module#Imagep3PageModule' },
  { path: 'imagep4', loadChildren: './pages/expanded/imagep4/imagep4.module#Imagep4PageModule' },
  { path: 'imagep5', loadChildren: './pages/expanded/imagep5/imagep5.module#Imagep5PageModule' },
  { path: 'imagep6', loadChildren: './pages/expanded/imagep6/imagep6.module#Imagep6PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
