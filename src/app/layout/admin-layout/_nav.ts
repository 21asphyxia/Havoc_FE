import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Games',
    url: '/admin/games',
    iconComponent: { name: 'cil-gamepad' },
  },
  {
    name: 'Declarations',
    url: '/admin/declarations',
    iconComponent: { name: 'cil-bullhorn' },
  },
];
