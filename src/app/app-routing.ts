import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './movies/movies';
import './music/music';
import './my-purchases/my-purchases';
import './my-purchases-backup/my-purchases-backup';
import './child-view1/child-view1';
import './child-view2/child-view2';

export const routes: Route[] = [
  { path: '', component: 'app-movies', name: 'Movies' },
  { path: 'movies', component: 'app-movies', name: 'Movies' },
  { path: 'music', component: 'app-music', name: 'Music' },
  { path: 'my-purchases', component: 'app-my-purchases', name: 'My Purchases' },
  { path: 'my-purchases-backup', component: 'app-my-purchases-backup', name: 'My Purchases-Backup' },
  { path: 'child-view1', component: 'app-child-view1', name: 'Child View1' },
  { path: 'child-view2', component: 'app-child-view2', name: 'Child View2' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
