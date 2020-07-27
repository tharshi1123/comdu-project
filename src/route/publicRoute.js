import Welcome from '../pages/App';
import card from '../pages/home';

const publicRoutes = [
  {
    path: '/',
    component: Welcome,
    exact: true,
  },
  {
    path: '/card',
    component: card,
    exact: true,
  },
];

export default publicRoutes;