import {MenuItem} from '../interfaces/menuItem';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'shield-alt',
    component: 'Animation102Screen',
  },
  {
    name: 'Switch Component',
    icon: 'toggle-on',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert Component',
    icon: 'exclamation-circle',
    component: 'AlertScreen',
  },
  {
    name: 'TextInput Component',
    icon: 'font',
    component: 'TextInputScreen',
  },
  {
    name: 'PullToRefresh Component',
    icon: 'redo-alt',
    component: 'PullToRefreshScreen',
  },
];
