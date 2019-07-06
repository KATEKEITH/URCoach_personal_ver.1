/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/memberlist',
    // Relative to /src/views
    view: 'MemberList',
    props: true
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile',
    props: true
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography/:coachId',
    name: 'Typography',
    view: 'Typography',
    props: true
  },
  {
    path: '/member-modify',
    name: 'MemberModify',
    view: 'MemberModify',
    props: true
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
