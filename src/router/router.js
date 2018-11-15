import {
  Top,
  SignUp,
  SignIn,
  SignOut,
  User,
  Setting,
  NotFound
} from '../pages'

const routes = [
  { path: '/', name: 'Top', component: Top },
  { path: '/signup', name: 'SignUp', component: SignUp, meta: {beforeOnly: true} },
  { path: '/signin', name: 'SignIn', component: SignIn, meta: {beforeOnly: true} },
  { path: '/signout', name: 'SignOut', component: SignOut },
  {
    path: '/settings',
    component: Setting.Container,
    children: [
      { path: '/', redirect: 'account' },
      { path: 'account', name: 'Account', component: Setting.Account },
      { path: 'password', name: 'Password', component: Setting.Password },
      { path: 'notification', name: 'Notification', component: Setting.Notification }
    ]
  },
  {
    path: '/users/:params',
    component: User.Container,
    children: [
      { path: '/', name: 'MyPage', component: User.Top },
      { path: 'favorites', name: 'Favorite', component: User.Favorite },
      { path: 'followers', name: 'Followers', component: User.Followers },
      { path: 'items/create', name: 'ItemCreate', component: User.Item.Create },
      { path: 'items/edit/:id', name: 'ItemEdit', component: User.Item.Edit },
      { path: 'items/:id', name: 'ItemDetail', component: User.Item.Detail },
      { path: 'presents/create', name: 'PresentCreate', component: User.Present.Create }
    ]
  },
  { path: '/notfound', name: 'NotFound', component: NotFound },
  { path: '*', redirect: 'notfound' }
]

export default routes
