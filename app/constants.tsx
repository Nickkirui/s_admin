

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    
  },
  {
    
    title: 'OPERATIONS',
    path: '/operations',
    
    submenu: true,
    subMenuItems: [
      
      { title: 'Trips', path: '/operations/trips' },
      { title: 'Stages', path: '/operations/stages' },
      {title: 'Riders', path: '/operations/riders' },
      { title: 'Tasks', path: '/operations/tasks' },
    ],
  },
  {
    title: 'MANAGEMENT',
    path: '/management',
    
    submenu: true,
    subMenuItems: [
      { title: 'Clients/Customers', path: '/management/clients' },
      { title: 'Entities', path: '/management/entities' },
      { title: 'Portfolio', path: '/management/portfolio' },
    ]
  },

  {
    title: 'ANALYTICS',
    path: '/analytics',
    submenu: true,
    subMenuItems: [
      { title:'Reports', path: '/analytics/reports'}
    ]
  },
  {
    title: 'SUPPORT',
    path: '/support',
    submenu: true,
    subMenuItems: [
      { title:'Messages', path: '/support/messages'},
      { title:'Feedback', path: '/support/feedback'},
      { title:'Tickets', path: '/support/tickets'}
    ]
  },
  {
    title: 'ADMINISTRATION',
    path: '/admin',
  
    submenu: true,
    subMenuItems: [
      { title: 'Staff', path: '/admin/staff' },
      { title: 'Settings', path: '/admin/settings' },
      { title: 'LogOut', path: '/' },
      
    
    ],
  },
  
];