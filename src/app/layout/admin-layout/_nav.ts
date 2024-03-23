import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Declarations',
    url: '/admin/declarations',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Members',
    url: '/members',
    iconComponent: { name: 'cil-user' },
  },
];
